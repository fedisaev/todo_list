import {useAppDispatch, useAppSelector} from "./useRedux";
import {useCallback} from "react";
import {Filters} from "../types/types";
import {filterList} from "../store/todosSlice";

interface FilterSelectHook {
    currentFilter: Filters;
    handleFilterTodos: (filter: Filters) => void;
}

export const useFilterSelect = (): FilterSelectHook => {

    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(state => state.todosR.filter);

    const handleFilterTodos = useCallback((filter: Filters) => {
        dispatch(filterList(filter));
    }, [dispatch]);

    return {currentFilter, handleFilterTodos};
};
