import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Politicians = () => {
  const page = {
    title: 'Politicians',
    breadcrumb: [
      { name: 'Politicians', path: '/politicians' },
    ],
  };

  return (
    <div className="bg-gray-900">
      <Header />
      <Banner page={page} />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Explore Politicians</h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          Discover politicians involved in shaping the political landscape. Learn more about their roles, backgrounds, and contributions to the African community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-slate-600 shadow-lg rounded-lg overflow-hidden">
            {/* <Image
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/400x300"
              width={48}
              height={60}
              alt="Politician"
            /> */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">Politician Name</h3>
              <p className="text-sm text-gray-600">Role/Position</p>
              <p className="mt-2 text-gray-700">
                A brief bio of the politician goes here, explaining their political career, impact, and role in the community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Politicians;
