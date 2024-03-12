import {ChangeEvent, FC} from "react";
import {BsPlus} from "react-icons/bs";
import {StyledButton, StyledInput, StyledLabel} from "../styles/StylesInputForm";
import {useAddTodo} from "../hooks/useAddTodo";

const InputForm: FC = () => {

    const {title, setTitle, handleAddTodo} = useAddTodo();

    return (
        <StyledLabel>
            <StyledInput placeholder='Enter new todo...'
                         value={title}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <StyledButton onClick={handleAddTodo}>
                <BsPlus size={'25px'}/>
            </StyledButton>
        </StyledLabel>
    );
};

export default InputForm;


