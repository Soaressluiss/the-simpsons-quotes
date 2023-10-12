import { AxiosError } from "axios";
import { instance } from "../../../../services/api";
import { Character } from "../Character";
import { DashboardContainer } from "./styles";
import { useState, useEffect } from "react";
import { IData } from "../../../../types/data";
import Loading from "../../../../components/Loading";

export const Dashboard: React.FC = () => {
    const [data, setData] = useState<IData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const HandleFetch = async () => {
            try {
                setIsLoading(true);
                const response = await instance.get("?count=6");
                setData(response.data);
                setIsLoading(false);
            } catch (err) {
                const error = err as AxiosError;
                console.error(error.message);
            }
        };
        HandleFetch();
    }, []);

    return (
        <DashboardContainer>
            <div></div>
            {isLoading ? (
                    <Loading />
            ) : (
                <section>
                    {data &&
                        data.map((item, id) => <Character key={id} image={item.image} character={item.character} />)}
                </section>
            )}
        </DashboardContainer>
    );
};
