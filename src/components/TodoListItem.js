import { useDispatch } from "react-redux";

import { markTodoAsCompleted, removeTodo } from "./todosSlice";

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();

    const onCompleteTodo = (text) => {
        dispatch(markTodoAsCompleted(text))
    }

    const onRemoveTodo = (text) => {
        dispatch(removeTodo(text));
    }

    return (
        <div className="todo-item-container">
            {todo.text}
            <div className="buttons-container">
                {todo.isCompleted ?
                    null
                    : <button
                        className="completed-button"
                        onClick={() => onCompleteTodo(todo.text)}
                    >
                        Mark as completed
                    </button>
                }
                <button
                    className="remove-button"
                    onClick={() => onRemoveTodo(todo.text)}
                >
                    Remove
                </button>
            </div>
        </div>
    )
};

export default TodoListItem;
