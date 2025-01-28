import { ReactNode } from "react";

export default function AboutLayout({children}: {children: ReactNode}){
  return (
   <>
    <nav className="fixed left-0 top-15 z-10 h-screen w-60 bg-gray-800">
      <ul>
        <li className="py-2 px-4">
          <a href="/about" className="text-white">About</a>
        </li>
        <li className="py-2 px-4">
          <a href="/about/profile" className="text-white">Profile</a>
        </li>
      </ul>
    </nav>
    <div>{children}</div>
   </>
  )
}