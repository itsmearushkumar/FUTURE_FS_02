import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { fetchLeads } from "../services/api";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

export default function Analytics() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads().then((res) => setLeads(res.data));
  }, []);

  const statusData = [
    { name: "New", value: leads.filter(l => l.status === "new").length },
    { name: "Converted", value: leads.filter(l => l.status === "converted").length },
    { name: "Lost", value: leads.filter(l => l.status === "lost").length },
  ];

  const sourceData = Object.values(
    leads.reduce((acc, lead) => {
      acc[lead.source] = acc[lead.source] || { source: lead.source, count: 0 };
      acc[lead.source].count++;
      return acc;
    }, {})
  );

  return (
    <div className="flex bg-zinc-950 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10 text-white">
        <Header title="Analytics" />

        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* Status Pie */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-lg mb-4">Lead Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={statusData} dataKey="value" outerRadius={100}>
                  {statusData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Source Bar */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-lg mb-4">Leads by Source</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sourceData}>
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
