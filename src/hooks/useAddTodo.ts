import React, {useCallback, useState} from "react";
import {useAppDispatch} from "./useRedux";
import {addTodo} from "../store/todosSlice";

interface AddTodoHook {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: () => void;
}

export const useAddTodo = (): AddTodoHook => {

    const [title, setTitle] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleAddTodo = useCallback(() => {
        if (title.trim().length) {
            dispatch(addTodo(title));
            setTitle('');
        }
    }, [title, dispatch]);

    return {title, setTitle, handleAddTodo};
};
