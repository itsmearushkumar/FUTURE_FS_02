import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LeadsTable from "../components/LeadsTable";
import CreateLeadModal from "../components/CreateLeadModal";
import { fetchLeads } from "../services/api";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadLeads = async () => {
    const res = await fetchLeads();
    setLeads(res.data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-zinc-950 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10">
        {/* Header WITH Search + Add Lead (NO Logout) */}
        <Header
          title="Leads"
          search={search}
          showSearch={true}
          showAdd={true}
          setSearch={setSearch}
          onAddLead={() => setShowModal(true)}
        />

        <LeadsTable
          leads={filteredLeads}
          refreshLeads={loadLeads}
        />

        {showModal && (
          <CreateLeadModal
            onClose={() => setShowModal(false)}
            onCreated={() => {
              loadLeads();
              setShowModal(false);
            }}
          />
        )}
      </main>
    </div>
  );
}
