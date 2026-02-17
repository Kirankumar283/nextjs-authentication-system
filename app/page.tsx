"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100">
      <h1 className="text-3xl font-bold mt-4">NextJS Authentication System</h1>
      <br />
      <hr className="w-100 border-slate-700" />
      <br />
      <h4 className="text-lg font-bold">
        Click here to interact with the system
      </h4>
      <div className="flex gap-4 mt-8">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg"
          onClick={() => router.push("/login")}
        >
          Go to Login Page
        </button>
        <button
          className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-lg  border border-slate-600"
          onClick={() => router.push("/signup")}
        >
          Go to Signup Page
        </button>
      </div>
    </div>
  );
}
