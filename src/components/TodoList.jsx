import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo, handleCompleteTodo, handleEditData } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
        ? todos.filter((todo) => !todo.complete)
        : todos.filter((todo) => todo.complete);

  if (filterTodosList.length === 0) {
    return <h5>No todos found!</h5>;
  }

  return (
    <>
      {filterTodosList.map((todo) => {
        return (
          <TodoCard key={todo.id} todoIndex={todo.id} todo={todo} {...props} />
        );
      })}
    </>
  );
}
