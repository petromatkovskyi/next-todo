'use client';

import { ChangeEvent } from 'react';

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        toggleTodo(id, e.target.checked);
    };

    return (
        <li className="flex gap-1 items-center">
            <input
                id={id}
                className="cursor-pointer peer"
                type="checkbox"
                defaultChecked={complete}
                onChange={handleChangeCheck}
            />
            <label
                htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
        </li>
    );
}
