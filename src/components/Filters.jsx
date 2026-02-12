export default function Filters({
  statusFilter,
  priorityFilter,
  setStatusFilter,
  setPriorityFilter,
  onClear
})
{
  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-3">Filters</h3>
      <div className=" flex flex-wrap gap-3 items-center" />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="ml-4px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <select
       className="ml-4 px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm"
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="all">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={onClear} className="ml-4 px-3 py-2 bg-red-500 text-white rounded-lg">
              Clear All
      </button>
      
    </div>
  );
}
