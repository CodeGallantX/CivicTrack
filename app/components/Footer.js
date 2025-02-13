"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    console.log("Email submitted:", email);
    setEmail('');
    alert("Thank you for subscribing!");
  };

  return (
    <footer className='bg-gray-900 px-8 xl:px-24 py-12'>
      <div className="grid grid-cols-1 md:grid-cols-4 items-start justify-between gap-4">
        <div className="flex flex-col items-start justify-start">
        <Link id="logo" href="/" className="text-white text-3xl font-bold font-main mb-4">
          Civic<span className="text-[#ffca0d]">Track</span>
        </Link>
        <p className="text-gray-400 text-[15px] text-left">We envision a world where every citizen holds the power to advocate for change...</p>
        </div>
        <ul className='col-span-2 flex flex-row items-start justify-start md:justify-center text-white gap-8 md:gap-10'>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/politicians">Politicians</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className='flex flex-col items-start gap-2 mt-4 md:mt-0'>
          <form onSubmit={handleSubmit} className='flex items-center w-full max-w-lg relative'>
            <input
              type="email"
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-gray-800 group text-[#919090] outline-none pl-4 pr-20 py-3 rounded-lg placeholder:text-[#636363] focus:ring-1 focus:ring-[#ffca0d] transition duration-300"
              required
            />
            <button
              type="submit"
              className='absolute bg-white text-gray-900 px-3 py-2 rounded-lg right-0 -translate-x-3 transition-colors duration-200 hover:bg-[#ffca0d] group-focus:bg[#ffca0d] outline-none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </form>
          
        </div>
      </div>

      <div className='flex flex-row md:flex-col items-center justify-center md:items-start gap-4 mt-8'>
        <div className='flex items-center gap-3'>
          <a className="text-white flex flex-row gap-2 hover:text-[#ffca0d]" href="https://github.com/CodeGallantX">
        <FaGithub className="text-2xl"/>
        <span className="hidden md:inline-block">CodeGallantX</span>
          </a>
        </div>
        <a href='mailto:johnayobami77@proton.me' className='flex items-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          <span className="text-white hidden md:inline-block">johnayobami77@proton.me</span>
        </a>
      </div>

      <hr className="bg-[#636363] h-[1px] w-full border-none mt-10 mb-5" />

      <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <span>&copy; 2024 - CivicTrack</span>
        <span>Built by <a href="https://github.com/codegallantx" target='_blank' className="text-[#ffca0d] hover:underline">CodeGallantX</a></span>
        <div className="flex flex-row gap-3 space-x-3 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
