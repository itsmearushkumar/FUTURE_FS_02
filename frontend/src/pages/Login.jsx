import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="bg-zinc-900 p-8 rounded-xl w-80">
        <h2 className="text-xl mb-4 font-bold">Admin Login</h2>

        <input
          className="w-full mb-3 p-2 bg-zinc-800 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-3 p-2 bg-zinc-800 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-2 rounded mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}
