import TodoItem from "./TodoItem";

 export default function TodoList({ todos, onDelete, onToggle, onEdit }) {
   if (!todos.length) return <p>No todos yet!</p>;
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full bg-white rounded-xl">
        <thead className="bg-black-100 border-b border-gray-300 text-sm tracking-wide text-gray-600 uppercase">
          <tr>
            <th className="p-3 text-left border-r border-gray-300">Sr. No.</th>
            <th className="p-3 text-left border-r border-gray-300">Title</th>
            <th className="p-3 text-left border-r border-gray-300">Description</th>
            <th className="p-3 text-left border-r border-gray-300">Status</th>
            <th className="p-3 text-left border-r border-gray-300">Priority</th>
            <th className="p-3 text-left border-r border-gray-300">Created</th>
            <th className="p-3 text-left border-r border-gray-300">Actions</th>
            <th className="p-3 text-left border-r border-gray-300">Edit</th>
            <th className="p-3 text-left border-r border-gray-300">Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b border-gray-200 hover:bg-gray-50 transition">

              <td className="p-3 border-r border-gray-300">{todos.indexOf(todo) + 1}</td>
              <td className="p-3 border-r border-gray-300">{todo.title}</td>

              <td className="p-3 border-r border-gray-300">{todo.description}</td>
              <td className="p-3 border-r border-gray-300">
                <span
                  className={
                    todo.status === "completed"
                      ? "text-green-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }
                >
                  {todo.status}
                </span>
              </td>

              
              <td className="p-3 border-r border-gray-300 capitalize">{todo.priority}</td>

              
              <td className="p-3 border-r border-gray-300">
                {new Date(todo.createdAt).toLocaleDateString()}
              </td>

              
              <td className="p-3 border-r border-gray-300 gap-2  justify-center">
                <button
                  onClick={() => onToggle(todo.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  {todo.status === "pending" ? "Mark As Completed" : "Mark As Pending"}
                </button>
              </td>
              <td className="p-3 border-r border-gray-300 gap-2 justify-center">
                <button
                  onClick={() => onEdit(todo)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
              </td>
              <td className="p-3 border-r border-gray-300 gap-2 justify-center">
                <button
                  onClick={() => onDelete(todo.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
