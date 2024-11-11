import Header from './Header';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-10 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-8">
          Promote Political Transparency in African Communities
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-6 max-w-2xl">
          CivicTrack provides a platform to monitor and engage with political data,
          holding leaders accountable to their communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-10 md:gap-4 mt-10">
          <Link href="/explore">
            <span className="bg-[#ffca0d] text-gray-900 py-4 px-8 rounded text-lg font-semibold transition hover:bg-transparent hover:border-[#ffca0d] hover:border hover:text-[#ffca0d]">
              Explore Data
            </span>
          </Link>
          <Link href="/contact">
            <span className="border border-[#ffca0d] text-[#ffca0d] py-4 px-8 rounded text-lg font-semibold transition hover:bg-[#ffca0d] hover:text-gray-900">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
