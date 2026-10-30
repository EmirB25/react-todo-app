import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo) {
    const newTodoList = [
      ...todos,
      { id: crypto.randomUUID(), input: newTodo, complete: false },
    ];

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodoList = todos.map((todo) =>
      todo.id === index ? { ...todo, complete: !todo.complete } : todo,
    );

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo) => todo.id !== index);

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  function handleEditData(inputValue, index) {
    const newTodoList = todos.map((todo) =>
      todo.id === index ? { ...todo, input: inputValue } : todo,
    );

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleEditData={handleEditData}
      />
    </>
  );
}

export default App;
