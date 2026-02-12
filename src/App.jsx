import { useState, useMemo, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [isEditing, setIsEditing] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

    useEffect(() => {
    console.log("Todos Updated:", todos);
  localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const statusMatch =
        statusFilter === "all" || todo.status === statusFilter;

      const priorityMatch =
        priorityFilter === "all" || todo.priority === priorityFilter;

      return statusMatch && priorityMatch;
    });
  }, [todos, statusFilter, priorityFilter]);

  function clearTodos() {
  if (!window.confirm("Clear all todos?")) return;

  setTodos([]);
} 
  function addTodo(values) {
  const newTodo = {
    id: Date.now().toString(),
    ...values,
    createdAt: Date.now(),
  };

  console.log("New Todo Added:", newTodo); 

  setTodos((prev) => [...prev, newTodo]);
}


  function updateTodo(values) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === isEditing.id ? { ...todo, ...values } : todo
      )
    );
    setIsEditing(null);
  }

  


  function deleteTodo(id) {
    if (!window.confirm("Are you sure?")) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "pending" ? "completed" : "pending",
            }
          : todo
      )
    );
  }

  
  return (
    <div className="min-h-screen w-screen justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-4">Todo App</h1>
      
      <div className="max-w-6xl mx-auto px-6 p-4 border rounded">

      <TodoForm
        isEditing={isEditing}
        onAdd={addTodo}
        onUpdate={updateTodo}
      />


      
      <div className="my-4" />
      <Filters
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
        onClear={clearTodos}
      />

    
      <div className="my-4" />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={setIsEditing}
      />

      </div>
    </div>
    
  );
}

export default App;
