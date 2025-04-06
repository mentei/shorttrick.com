"use client";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button onClick={handleLogin} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Login with Google
      </button>
    </div>
  );
}
