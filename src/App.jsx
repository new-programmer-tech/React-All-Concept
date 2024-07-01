import { TodoProvider } from "./contexts"
import { useState ,useEffect } from "react"

function App() {

  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    setTodos((prevTodo)=> [...prevTodo ,{id:Date.now() , ...todo}])
  }

  const updateTodo = (id ,todo) => {
    setTodos((prevTodo)=> prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

    // or

    // prevTodo.map((todo) => {
    //   if (todo.id === id) {
    //     condition
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prevTodo) => prevTodo.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length > 0) {
    setTodos(todos)
  }
  }, [])


  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
  <TodoProvider value={{addTodo ,deleteTodo ,todos ,toggleCompleted ,updateTodo}}>

  </TodoProvider>
  )
}

export default App
