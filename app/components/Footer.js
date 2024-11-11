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
    alert("Thank you for signing up!");
  };

  return (
    <footer className='bg-gray-900 px-8 xl:px-24 py-12'>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link id="logo" href="/" className="text-white text-3xl font-bold font-main">
          Civic<span className="text-[#ffca0d]">Track</span>
        </Link>
        <ul className='flex flex-row items-center justify-center text-white gap-8 md:gap-16'>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/politicians">Politicians</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className='flex flex-col items-start gap-2 mt-4 md:mt-0'>
          <form onSubmit={handleSubmit} className='flex items-center w-full max-w-sm relative'>
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

      <div className='flex flex-col gap-2 mt-8'>
        <div className='flex items-center gap-3'>
        <FaGithub className="text-white"/>
        </div>
        <a href='mailto:contact@civictrack.com' className='flex items-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          <span className="text-white">contact@civictrack.com</span>
        </a>
        <a href="tel:+123456789" className='flex items-center gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fill-white" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
            <path fillRule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
          </svg>
          <span className="text-white">+123 456 789</span>
        </a>
      </div>

      <hr className="bg-[#636363] h-[1px] w-full border-none mt-10 mb-5" />

      <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <span>&copy; 2024 - CivicTrack</span>
        <span>Built by <a href="https://github.com/codegallantx" target='_blank' className="text-[#ffca0d] hover:underline">CodeGallantX</a></span>
        <div className="flex flex-row gap-3 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
