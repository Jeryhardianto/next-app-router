"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  // const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 items-center justify-between mx-auto p-4">
      <h1 className="text-white text-2xl font-semibold">OnlineStore</h1>
      <div className="flex text-white gap-4">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-yellow-300" : ""
          } cursor-pointer`}
        >
          Home
        </Link>
        <Link
          href="/product"
          className={`${
            pathname === "/product" ? "text-yellow-300" : ""
          } cursor-pointer`}
        >
          Product
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "text-yellow-300" : ""
          } cursor-pointer`}
        >
          About
        </Link>
        <Link
          href="/about/profile"
          className={`${
            pathname === "/about/profile" ? "text-yellow-300" : ""
          } cursor-pointer`}
        >
          Profile
        </Link>
      </div>
      <div>
        {status === "authenticated" ? (
          <>
            <span className="text-white mr-5">{session?.user?.fullname}</span>
            <button
              className="bg-yellow-300 px-4 py-2 rounded-md text-gray-800"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-yellow-300 px-4 py-2 rounded-md text-gray-800"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
