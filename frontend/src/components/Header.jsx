export default function Header({
  title,
  showSearch = false,
  showAdd = false,
  showLogout = false,
  onAddLead,
  search,
  setSearch,
  onLogout
}) {
  return (
    <div className="flex items-center justify-between mb-10">
      {/* Left: Page Title */}
      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      {/* Center: Search */}
      {showSearch && (
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg w-72"
        />
      )}

      {/* Right: Actions */}
      <div className="flex gap-4">
        {showLogout && (
          <button
            onClick={onLogout}
            className="text-gray-300 hover:text-white"
          >
            Logout
          </button>
        )}

        {showAdd && (
          <button
            onClick={onAddLead}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
            + Add Lead
          </button>
        )}
      </div>
    </div>
  );
}
