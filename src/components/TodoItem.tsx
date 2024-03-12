import React, {FC, useMemo} from 'react';
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa';
import { useAppDispatch } from "../hooks/useRedux";
import {removeTodo, toggleComplete } from "../store/todosSlice";
import {StyledInputEdit, StyledLi, StyledS, StyledSpan} from "../styles/StylesTodoItem";
import {TodoItemProps} from "../types/props";
import {useEditTodo} from "../hooks/useEditTodo";

const TodoItem: FC<TodoItemProps> = ({ todo, index, onDragStart, onDragLeave, onDragEnd, onDragOver, onDrop }) => {

    const dispatch = useAppDispatch();
    const { isEditing, editedTitle, handleChange, handleSave, handleEditClick } = useEditTodo(todo);

    const todoContent = useMemo(() => {
        if (isEditing) {
            return (
                <>
                    <StyledInputEdit value={editedTitle} onChange={handleChange} disabled={todo.completed} />
                    <span onClick={handleSave}>
                        <FaSave style={{cursor:'pointer'}}/>
                    </span>
                </>
            );
        } else {
            return (
                <>
                    {todo.title}
                    <span onClick={handleEditClick} style={{ cursor: todo.completed ? 'not-allowed' : 'pointer' }}>
                        <FaEdit />
                    </span>
                </>
            );
        }
    }, [isEditing, editedTitle, handleChange, todo.completed, todo.title, handleSave, handleEditClick]);

    return (
        <StyledLi draggable={true}
                  onDragStart={(e) => onDragStart(e, todo)}
                  onDragLeave={(e) => onDragLeave(e)}
                  onDragEnd={(e) => onDragEnd(e)}
                  onDragOver={(e) => onDragOver(e)}
                  onDrop={(e) => onDrop(e, todo)}
        >
            <span>{index + 1}.</span>
            <input type="checkbox"
                   style={{cursor:'pointer'}}
                   value={''}
                   checked={todo.completed}
                   onChange={() => dispatch(toggleComplete(todo.id))}
            />
            {todo.completed ? <StyledS>{todoContent}</StyledS> : <StyledSpan>{todoContent}</StyledSpan>}
            <span onClick={() => dispatch(removeTodo(todo.id))}>
                <FaTrash style={{cursor:'pointer'}}/>
            </span>
        </StyledLi>
    );
};

export default TodoItem;
