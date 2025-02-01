"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-5">
      <h1 className="text-2xl font-bold text-red-500">Error</h1>
      <p className="text-sm text-gray-500">{error.message}</p>
      <button
        onClick={reset}
        className="px-3 py-1 text-sm text-white bg-red-500 rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
