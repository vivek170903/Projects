export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <li>
      <strong>{todo.title}</strong> ({todo.priority})

      <button onClick={() => onToggle(todo.id)}>
        {todo.status === "pending" ? "Complete" : "Pending"}
      </button>

      <button onClick={() => onEdit(todo)}>Edit</button>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
