import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const onDelete = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodos = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "All":
        setFilteredTodos(todos);
        break;
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  const selectHandler = (e) => {
    // console.log(e.value);
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <Navbar
        unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
        completedTodos={todos.filter((todo) => todo.isCompleted).length}
        todos={todos}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onCompleted={completeTodo}
        onDelete={onDelete}
        onUpdate={updateTodos}
      />
    </div>
  );
};

export default Todos;
