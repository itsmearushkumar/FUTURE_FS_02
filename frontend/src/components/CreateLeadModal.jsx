import { useState } from "react";

export default function CreateLeadModal({ onClose, onCreated }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    source: "",
    notes: "",
    status: "new",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-[420px] text-white">
        <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-zinc-800"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-zinc-800"
        />

        <input
          name="source"
          placeholder="Source"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-zinc-800"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-zinc-800"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-700 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
