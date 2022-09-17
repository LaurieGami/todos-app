const TodoListItem = ({ todo }) => (
    <div className="todo-item-container">
        {todo.text}
        <div className="buttons-container">
            <button className="completed-button">Mark as completed</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
