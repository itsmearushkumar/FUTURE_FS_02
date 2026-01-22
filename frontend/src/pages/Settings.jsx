import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex bg-zinc-950 min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-gray-400">
          Settings page coming soon. Admin controls will be added here.
        </p>
      </main>
    </div>
  );
}
