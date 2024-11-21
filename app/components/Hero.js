"use client"
import Header from './Header';
import Link from 'next/link';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  return (
    <div className="bg-gray-900 text-white relative overflow-hidden">
      <Header />
      <div className="relative flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between min-h-screen px-10 xl:px-24">
        
        <div className="absolute w-full lg:w-2/5 lg:static top-10 inset-0 flex justify-center lg:justify-end items-center opacity-10 lg:opacity-100">
          <img
            src="/africa_003.svg"
            alt="africa map"
            className="object-cover"
          />
        </div>
        
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left z-10">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Promote Political Transparency in African Communities
          </h1>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" className="text-lg md:text-xl xl:text-2xl text-gray-300 max-w-2xl">
            CivicTrack provides a platform to monitor and engage with political data,
            holding leaders accountable to their communities.
          </p>
          
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="flex flex-col sm:flex-row items-center lg:items-start gap-8 md:gap-0 mt-4 justify-center lg:justify-start">
            <Link href="/politicians">
              <span className="bg-[#ffca0d] text-gray-900 py-4 px-8 rounded text-lg font-semibold transition hover:bg-transparent hover:border-[#ffca0d] hover:border hover:text-[#ffca0d]">
                Explore Data
              </span>
            </Link>
            <Link href="/login">
              <span className="border border-[#ffca0d] text-[#ffca0d] py-4 px-8 mt-10 ml-0 md:ml-6 md:mt-0 rounded text-lg font-semibold transition hover:bg-[#ffca0d] hover:text-gray-900">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
