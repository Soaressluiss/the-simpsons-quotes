import { ContainerSearch, Elipse, Input } from "./styles";
import { FaSearch } from "react-icons/fa";

export const InputSeach: React.FC = () => {
    return (
        <ContainerSearch>
            <Input 
            type="text" 
            name="search" 
            required minLength={3} 
            tabIndex={1} 
            placeholder="ex: Homer Simpsons"
            />
            <Elipse aria-label="button" tabIndex={2}>
                <FaSearch />
            </Elipse>
        </ContainerSearch>
    );
};
