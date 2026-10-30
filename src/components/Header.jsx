export function Header(props) {
  const {todos} = props;
  const todosLength = todos.filter((todo) => !todo.complete).length;

  const isTasksPlural = todosLength !== 1;
  
  const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

  return (
    <header>
      <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
    </header>
  )
}