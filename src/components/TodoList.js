import { useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem key={todo.text} todo={todo} />)}
        </div>
    )
};

export default TodoList;
