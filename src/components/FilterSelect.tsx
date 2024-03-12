import {ChangeEvent, FC} from "react";
import {Filters} from "../types/types";
import {StyledSelect} from "../styles/StylesFilterSelect";
import {useFilterSelect} from "../hooks/useFilterSelect";

const FilterSelect: FC = () => {

    const {currentFilter, handleFilterTodos} = useFilterSelect();

    return (
        <StyledSelect value={currentFilter}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilterTodos(e.target.value as Filters)}
        >
            <option value={Filters.ALL}>All todos</option>
            <option value={Filters.COMPLETED}>Completed todos</option>
            <option value={Filters.UNCOMPLETED}>Uncompleted todos</option>
        </StyledSelect>
    );
};

export default FilterSelect;
