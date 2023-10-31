import { useContext } from "react";
import { ContainerSearch, ElipseBtn, Input } from "./styles";
import { FaSearch } from "react-icons/fa";
import { CharacterContext } from "../../../../contexts/CharacterContext";

export const InputSeach: React.FC = () => {
    const { searchCharacter, setSearchCharacter, HandleSearch } = useContext(CharacterContext);

    return (
        <ContainerSearch onSubmit={HandleSearch}>
            <Input
                type="text"
                name="search"
                value={searchCharacter}
                required
                minLength={3}
                placeholder="ex: Homer Simpsons"
                onChange={({ target }) => setSearchCharacter(target.value)}
            />
            <ElipseBtn aria-label="button search">
                <FaSearch />
            </ElipseBtn>
        </ContainerSearch>
    );
};
