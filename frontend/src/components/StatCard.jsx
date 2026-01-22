export default function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl text-white shadow-lg">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
