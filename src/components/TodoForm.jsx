import { useState, useEffect } from "react";

export default function TodoForm({ isEditing, onAdd, onUpdate }) {
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  useEffect(() => {
    if (isEditing) {
      setValues(isEditing);
    }
  }, [isEditing]);

  function handleChange(key, val) {
    setValues((prev) => ({ ...prev, [key]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.title.trim()) return;

    if (isEditing) onUpdate(values);
    else onAdd(values);

    setValues({
      title: "",
      description: "",
      status: "pending",
      priority: "low",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border p-2 rounded"
        placeholder="Title"
        value={values.title}
        onChange={(e) => handleChange("title", e.target.value)}

      />

      <input
        className="border p-2 rounded"
        placeholder="Description"
        value={values.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={values.priority}
        onChange={(e) => handleChange("priority", e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className={values.title.trim() ? "bg-blue-500 text-white px-4 py-2 rounded" : "bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed"} disabled={!values.title.trim()}>
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
}
