"use client";

export default function Error() {
  return (
    <div className="w-full h-screen  rounded-[12px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-full space-y-5">
        <h1 className="text-9xl">500</h1>
        <h1 className="text-2xl text-black-500">
          When something wrong
        </h1>
      </div>
    </div>
  );
}
