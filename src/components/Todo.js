const Todo = ({ todo, onCompleted, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div
        onClick={onCompleted}
        className={`todoText ${todo.isCompleted && "complete"}`}
      >
        {todo.text}
      </div>
      <div>
        <button className="btn" onClick={onEdit}>
          edit
        </button>
        <button className="btn remove" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
