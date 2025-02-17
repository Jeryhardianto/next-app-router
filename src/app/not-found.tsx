import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-screen  rounded-[12px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-full space-y-5">
        <h1 className='text-9xl'>404</h1>
        <h1 className="text-2xl font-bold text-black-500">Page Not Found</h1>
        <p className="text-sm text-gray-500">The page you{"'"}re looking for does not exist.</p>
        <Link href="/" className="px-3 py-1 text-sm bg-black-500 rounded-md">
           Back to Home
        </Link>
      </div>
    </div>
  );
}
