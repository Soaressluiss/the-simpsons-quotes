import { AxiosError } from "axios";
import { instance } from "../../../../services/api";
import { Character } from "../Character";
import { DashboardContainer } from "./styles";
import { useState, useEffect, useRef, useContext } from "react";
import { IData } from "../../../../types/data";
import Loading from "../../../../components/Loading";
import { SearchCharacterContext } from "../../../../contexts/SearchCharacterContext";

export const Dashboard: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [quotePerPage, setQuotePerPage] = useState(2);
    const { dataSearch, isLoading, setIsLoading } = useContext(SearchCharacterContext);

    const looking = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const HandleFetch = async () => {
            try {
                setIsLoading(true);
                const response = await instance.get(`?count=${quotePerPage}`);
                setData((prevData) => [...prevData, ...response.data]);
                setIsLoading(false);
            } catch (err) {
                const error = err as AxiosError;
                console.error(error.message);
            }
        };

        HandleFetch();
    }, [quotePerPage, setIsLoading]);

    useEffect(() => {
        const observer = new IntersectionObserver(observadora, {
            root: null,
            threshold: 0.5,
        });

        if (looking.current) {
            observer.observe(looking.current);
        }

        function observadora(entry: IntersectionObserverEntry[]) {
            if (entry[0].isIntersecting) {
                setQuotePerPage((previous) => previous + 1);
            }
        }
    }, []);

    return (
        <DashboardContainer>
            <section>
                {dataSearch.length < 1
                    ? data.map((item, id) => <Character key={id} image={item.image} character={item.character} />)
                    : dataSearch.map((item, id) => (
                          <Character key={id} image={item.image} character={item.character} />
                      ))}
            </section>
            {isLoading && <Loading />}
            <span ref={looking} />
        </DashboardContainer>
    );
};
