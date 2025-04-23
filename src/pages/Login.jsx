import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="flex flex-col items-center p-5 shadow-md bg-gradient-to-r from-yellow-600 to-pink-600">
        <h2 className="text-2xl mb-4 font-bold text-white">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-64 focus:outline-none rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-64 focus:outline-none rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login
        </button>
        <p className="mt-4 ">
          Don't have an account?{" "}
          <Link to="/register" className="text-black underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
