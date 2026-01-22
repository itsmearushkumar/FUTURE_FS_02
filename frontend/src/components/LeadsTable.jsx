import { updateLeadStatus, deleteLead } from "../services/api";

export default function LeadsTable({ leads, refreshLeads }) {
  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateLeadStatus(id, newStatus);
      refreshLeads();
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      await deleteLead(id);
      refreshLeads();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl p-6 text-white">
      <h2 className="text-lg font-semibold mb-4">Leads</h2>

      <table className="w-full text-left">
        <thead className="text-gray-400 border-b border-zinc-700">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Source</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-b border-zinc-800 hover:bg-zinc-800"
            >
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.source}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    handleStatusChange(lead._id, e.target.value)
                  }
                  className="bg-zinc-800 text-white px-2 py-1 rounded"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>
              </td>

              <td className="text-gray-400">{lead.notes}</td>

              <td>
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>

              <td>
                <button
                  onClick={() => handleDelete(lead._id)}
                  className="text-red-500 hover:text-red-400 text-lg"
                  title="Delete Lead"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
