import { AxiosError } from "axios";
import { api } from "../../../../services/api";
import { Character } from "../Character";
import { DashboardContainer } from "./styles";
import { useState, useEffect, useRef, useContext } from "react";
import Loading from "../../../../components/Loading";
import { CharacterContext } from "../../../../contexts/CharacterContext";

interface IDashboardProps {
    handleModalCharacter(isOpen: boolean): void;
}
export const Dashboard: React.FC<IDashboardProps> = ({ handleModalCharacter }) => {
    const [quotePerPage, setQuotePerPage] = useState(2);
    const { data, setData, dataSearch, isLoading, setIsLoading } = useContext(CharacterContext);

    const looking = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const HandleFetch = async () => {
            try {
                setIsLoading(true);
                const response = await api.get(`?count=${quotePerPage}`);
                setData((prevData) => [...prevData, ...response.data]);
                setIsLoading(false);
            } catch (err) {
                const error = err as AxiosError;
                console.error(error.message);
            }
        };

        HandleFetch();
    }, [quotePerPage, setIsLoading, setData]);

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
                    ? data.map((item, id) => (
                          <Character
                              key={id}
                              id={id}
                              handleModalCharacter={handleModalCharacter}
                              image={item.image}
                              character={item.character}
                              quote={item.quote}
                          />
                      ))
                    : dataSearch.map((item, id) => (
                          <Character
                              key={id}
                              id={id}
                              handleModalCharacter={handleModalCharacter}
                              image={item.image}
                              character={item.character}
                              quote={item.quote}
                          />
                      ))}
            </section>
            {isLoading && <Loading />}
            <span ref={looking} />
        </DashboardContainer>
    );
};
