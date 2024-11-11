import React from 'react';
import Link from 'next/link';
import Image from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';



const App = () => {
    return (
        <body>
            <Header />
            <div className="flex flex-col gap-10 mt-16 py-10 px-4 items-center justify-center"> 
                <h2 className="text-8xl font-bold text-center">Oops!</h2>
                {/* <Image src="/error/error.png" alt="404" /> */}
                <div>
                    <h3 className='text-2xl font-semibold mb-2'>SOMETHING WENT WRONG...</h3>
                    <p className='text-center text-[#222831b6]'>Sorry, we couldn&apos;t find your page</p>
                </div>
                <Link href="/" className='text-lg font-semibold bg-[#92B76D] px-8 py-3 hover:bg-[#ffca0d] transition-all duration-300 ease-in-out'>Back to Home</Link>
                
            </div>
            <Footer />
        </body>
    )
}

export default App;