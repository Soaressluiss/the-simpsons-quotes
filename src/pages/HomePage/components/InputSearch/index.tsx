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
                tabIndex={1}
                placeholder="ex: Homer Simpsons"
                onChange={({ target }) => setSearchCharacter(target.value)}
            />
            <ElipseBtn tabIndex={2}>
                <FaSearch />
            </ElipseBtn>
        </ContainerSearch>
    );
};
