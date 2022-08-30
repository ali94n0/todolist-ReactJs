import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onCompleted, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, Text: "", onCompleted: false });
  const renderTodos = () => {
    if (todos.length === 0) return <p className="empty">add new todo !</p>;
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={() => onCompleted(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  const editTodo = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, Text: "", onCompleted: false });
  };

  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
