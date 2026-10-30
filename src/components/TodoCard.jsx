import { useState } from "react";

export function TodoCard(props) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    todo,
    todoIndex,
    handleDeleteTodo,
    handleCompleteTodo,
    handleEditData,
  } = props;

  return (
    <div className="card todo-item">
      <p>
        {edit ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          todo.input
        )}
      </p>

      <div className="todo-buttons">
        {edit ? (
          <>
            <button
              onClick={() => {
                if (!inputValue.trim()) return;

                handleEditData(inputValue.trim(), todoIndex);
                setInputValue("");
                setEdit(false);
              }}
              disabled={!inputValue.trim()}
            >
              Save
            </button>
            <button
              onClick={() => {
                setEdit(false);
                setInputValue("");
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                handleCompleteTodo(todoIndex);
              }}
              disabled={todo.complete}
            >
              <h6>Done</h6>
            </button>
            <button
              onClick={() => {
                setEdit(true);
                setInputValue(todo.input);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDeleteTodo(todoIndex);
              }}
            >
              <h6>Delete</h6>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
