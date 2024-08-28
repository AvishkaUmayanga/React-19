import { useOptimistic, useState } from 'react'

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [ optimisticToDos, setOptimisticToDos] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [ ...oldTodos, { text: newTodo, pending: true} ]
  );

  const handleAddTodos = async( formData ) => {
    const newTodo = formData.get("todo");

    setOptimisticToDos(newTodo)

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTodos((currentTodos) => [
        ...currentTodos,
        { text: newTodo, pending: false}
    ]);
  };

  return (
    <div>
      <form action={handleAddTodos}>
        <input type="text" name="todo" placeholder='Enter todo...'/>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        { optimisticToDos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            {todo.pending && <span>(Adding...)</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList