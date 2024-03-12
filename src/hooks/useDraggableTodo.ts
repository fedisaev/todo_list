import React, {useCallback, useState} from "react";
import {Todo} from "../types/types";
import {useAppDispatch} from "./useRedux";
import {editTodo} from "../store/todosSlice";

interface DraggableTodoHook {
    dragStartHandler: (e: React.DragEvent<HTMLLIElement>, todo: Todo) => void;
    dragEndHandler: () => void;
    dragOverHandler: (e: React.DragEvent<HTMLLIElement>) => void;
    dropHandler: (e: React.DragEvent<HTMLLIElement>, todo: Todo) => void;
}

export const useDraggableTodo = (): DraggableTodoHook => {

    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
    const dispatch = useAppDispatch();

    const dragStartHandler = useCallback((e: React.DragEvent<HTMLLIElement>, todo: Todo) => {
        setCurrentTodo(todo);
    }, []);

    const dragEndHandler = useCallback(() => {
    }, []);

    const dragOverHandler = useCallback((e: React.DragEvent<HTMLLIElement>) => {
        e.preventDefault();
    }, []);

    const dropHandler = useCallback((e: React.DragEvent<HTMLLIElement>, todo: Todo) => {
        e.preventDefault();
        if (currentTodo) {
            dispatch(editTodo({...currentTodo, id: todo.id}));
            dispatch(editTodo({...todo, id: currentTodo.id}));
        }
    }, [currentTodo, dispatch]);

    return {dragStartHandler, dragEndHandler, dragOverHandler, dropHandler};
};
