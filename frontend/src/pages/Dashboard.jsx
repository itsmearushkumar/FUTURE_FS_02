import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import LeadsTable from "../components/LeadsTable";
import CreateLeadModal from "../components/CreateLeadModal";
import { fetchLeads } from "../services/api";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const loadLeads = async () => {
    const res = await fetchLeads();
    setLeads(res.data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // ✅ SEARCH FILTER
  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex bg-zinc-950 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10">
        <Header
          title="Lead Dashboard"
          search={search}
          setSearch={setSearch}
          showLogout={true}
          onLogout={handleLogout}
          onAddLead={() => setShowModal(true)}
        />

        <div className="grid grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Leads" value={leads.length} />
          <StatCard
            title="New Leads"
            value={leads.filter((l) => l.status === "new").length}
          />
          <StatCard
            title="Converted"
            value={leads.filter((l) => l.status === "converted").length}
          />
        </div>

        <LeadsTable leads={filteredLeads} refreshLeads={loadLeads} />

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
