import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password, name);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col items-center bg-gray-400 p-7 ">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-64 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-64 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-64 focus:outline-none"
        />
        <button
          onClick={handleRegister}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Register
        </button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-black underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
