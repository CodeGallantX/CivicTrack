import React from 'react';
import Link from 'next/link';

const App = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 bg-gray-900 h-screen'>
        <div className='hidden lg:block lg:w-5/6 xl:w-11/12 relative h-screen bg-gradient-to-tl from-cyan-800 to-purple-900'>
            <div className='absolute w-full opacity-50 h-screen bg-black backdrop-blur-xl'></div>
            <div className='relative text-white top-1/4 left-5'>
                <div className='flex flex-col items-center justify-between gap-10 px-8'>
                    <Link href='/' className="text-4xl text-left font-bold">CivicTrack</Link>
                    <div className="gap-2 ">
                        <blockquote className="text-left text-3xl =">&ldquo;Success is not final, failure is not fatal: It is the courage to continue that counts.&rdquo;</blockquote>
                        <em className='text-right text-lg'>— Winston Churchill</em>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col text-white gap-5 px-16 lg:px-10 xl:px-28 py-12 lg:py-8">
            <h1 className='text-4xl lg:text-6xl font-bold text-center'>Log In</h1>
            <p>Don&apos;t have an account? <a href="/signup" className='text-[#ffca0d] transition duration-300 ease-in-out'>Create Account</a></p>
            <form action="#" method="post" className='flex flex-col gap-3 lg:gap-8'>
                <fieldset className="flex flex-col items-start justify-center gap-1">
                    <label className='text-white' htmlFor="email">Email Address</label>
                    <input className="w-full border border-solid py-3 px-3 rounded border-gray-300 bg-gray-800 outline-none focus:border-none focus:ring-1 focus:ring-[#ffca0d] text-gray-300" type="email" name="email" id="email" placeholder='kiasmith@mail.com' required />
                </fieldset>
                <fieldset className="flex flex-col items-start justify-center gap-1">
                    <label className='text-white' htmlFor="password">Password</label>
                    <input className="w-full border border-solid py-3 px-3 rounded border-gray-300 bg-gray-800 outline-none focus:border-none focus:ring-1 focus:ring-[#ffca0d] text-gray-300" type="password" name="password" id="password" placeholder='8 or more characters' required/>
                </fieldset>
                <div className="flex flex-row items-center justify-between mt-4">
                    <fieldset className="">
                        <input className="" type="checkbox" name="remember" id="remember" />
                        <label className='text-white ml-2' htmlFor="remember">Remember me</label>
                    </fieldset>
                    <a className="text-[#ffca0d] transition duration-300 ease-in-out" href="/forgot-password">Forgot Password?</a>
                </div>
                
                <button className="w-full text-xl font-semibold text-gray-900 py-4 rounded bg-[#ffca0d]" type="submit">SIGN IN</button>
            </form>
            <div className='mt-4'>
                <div className='flex flex-row gap-5 items-center justify-center mb-2'>
                    <span className='w-full h-[1px] bg-gray-300'></span>
                    <span className='text-lg font-semibold text-gray-300'>Or</span>
                    <span className='w-full h-[1px] bg-gray-300'></span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <a href="#" className="w-full flex flex-row items-center justify-center gap-2 hover:bg-gray-800 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500">
                        <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={20} height={20} />
                        <span>Continue with Google</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;