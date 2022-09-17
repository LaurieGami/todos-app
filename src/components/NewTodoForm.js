import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTodo } from "./todosSlice";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const onCreateTodo = () => {
        if (inputValue !== "") {
            dispatch(createTodo(inputValue));
            setInputValue("");
        };
    }
    
    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                className="new-todo-button"
                onClick={onCreateTodo}
            >
                Create Todo</button>
        </div>
    );
};

export default NewTodoForm;
