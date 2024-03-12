import {Todo} from "./types";
import React from "react";

export interface TodoItemProps {
    todo: Todo;
    index: number;
    onDragStart: (e: React.DragEvent<HTMLLIElement>, todo: Todo) => void;
    onDragLeave: (e: React.DragEvent<HTMLLIElement>) => void;
    onDragEnd: (e: React.DragEvent<HTMLLIElement>) => void;
    onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
    onDrop: (e: React.DragEvent<HTMLLIElement>, todo: Todo) => void;
}