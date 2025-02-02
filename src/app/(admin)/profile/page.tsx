"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Profile</h1>
      <div className="grid gap-4">
        <div>
          <span className="text-gray-500">Fullname:</span>
          <span className="text-gray-800">{session?.user?.fullname}</span>
        </div>
        <div>
          <span className="text-gray-500">Email:</span>
          <span className="text-gray-800">{session?.user?.email}</span>
        </div>
        <div>
          <span className="text-gray-500">Role:</span>
          <span className="text-gray-800">{session?.user?.role}</span>
        </div>
      </div>
    </div>
  );
}