'use client'

import { useRouter } from "next/navigation";
// import  ParticlesLines  from '@/components/lines/ParticlesLines';

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
     
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
       
          <h1 className="dark:text-shadow-d text-shadow-l leading-[1.2] text-amber-100 drop-shadow-2xl text-primary">
          Hello in your Personalized invite Platform 
          </h1>
       
        </div>
      
      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[100px] inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none   focus:ring-offset-2  bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 me-2 mb-2 text-lg font-bold text-black-900 z-10"
          onClick={() => router.push("/create-invitation")}
        >
          Go to discover
        </span>
      </button>
      
    </main>
  );
}