import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {todoList} from "../data/data";
import {Filters, Todo, TodosState} from "../types/types";

const initialState: TodosState = {
    list: todoList,
    filter: Filters.ALL,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find(todo => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        filterList(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },
        editTodo(state, action: PayloadAction<Todo>) {
            const index = state.list.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        }
    }
});

export const {addTodo, toggleComplete, removeTodo, filterList, editTodo} = todosSlice.actions;
export default todosSlice.reducer;
