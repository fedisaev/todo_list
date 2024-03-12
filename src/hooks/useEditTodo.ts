import {Todo} from "../types/types";
import React, {useCallback, useState} from "react";
import {editTodo} from "../store/todosSlice";
import {useAppDispatch} from "./useRedux";

interface EditTodoHook {
    isEditing: boolean;
    editedTitle: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    handleEditClick: () => void;
}

export const useEditTodo = (todo: Todo): EditTodoHook => {

    const dispatch = useAppDispatch();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editedTitle, setEditedTitle] = useState<string>(todo.title);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(e.target.value);
    }, []);

    const handleSave = useCallback(() => {
        dispatch(editTodo({
            id: todo.id,
            title: editedTitle,
            completed: todo.completed
        }));
        setIsEditing(false);
    }, [dispatch, todo.id, editedTitle, todo.completed]);

    const handleEditClick = useCallback(() => {
        if (!todo.completed) {
            setIsEditing(true);
        }
    }, [todo.completed]);

    return {isEditing, editedTitle, handleChange, handleSave, handleEditClick};
};
