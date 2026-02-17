"use client";
import Link from "next/link";
import React, { useState } from "react";

export const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User data submitted:", user);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100">
      <h1 className="text-3xl font-bold mt-4">Signup Page</h1>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border border-gray-300 rounded-md p-2 my-2 w-full"
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="border border-gray-300 rounded-md p-2 my-2 w-full"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border border-gray-300 rounded-md p-2 my-2 w-full"
        />
        <button
          className="bg-blue-500 text-white rounded-md p-2 mt-4 w-full hover:bg-blue-600 transition"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <p className="text-sm text-slate-400 mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
