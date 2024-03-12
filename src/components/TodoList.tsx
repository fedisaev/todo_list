import React, {FC, useMemo} from "react";
import {useAppSelector} from "../hooks/useRedux";
import {Filters, Todo} from "../types/types";
import TodoItem from "./TodoItem";
import {StyledP} from "../styles/StylesTodoList";
import {useDraggableTodo} from "../hooks/useDraggableTodo";

const TodoList: FC = () => {

    const filteredTodos = useAppSelector(state => {
        const todos = state.todosR.list;
        const filter = state.todosR.filter;
        return todos.filter(todo => {
            return (filter === Filters.COMPLETED && todo.completed) ||
                (filter === Filters.UNCOMPLETED && !todo.completed) ||
                (filter === Filters.ALL);
        });
    });

    const sortedTodos = useMemo(() =>
        filteredTodos.sort((a: Todo, b: Todo) => a.id - b.id), [filteredTodos]);

    const {dragStartHandler, dragEndHandler, dragOverHandler, dropHandler} = useDraggableTodo();

    return (
        <ul style={{padding: 0}}>
            {sortedTodos.length === 0 ? (
                <StyledP>Todo List is empty. Add a new one...</StyledP>
            ) : (
                sortedTodos.map((todo, index) => (
                    <TodoItem key={todo.id}
                              todo={todo}
                              index={index}
                              onDragStart={dragStartHandler}
                              onDragLeave={dragEndHandler}
                              onDragEnd={dragEndHandler}
                              onDragOver={dragOverHandler}
                              onDrop={dropHandler}
                    />
                ))
            )}
        </ul>
    );
};

export default TodoList;


