import React from "react";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100">
      <p className="text-3xl font-bold mt-4">
        Profile Page of:
        <span className="ml-2">{id}</span>
      </p>
    </div>
  );
};

export default UserProfile;
