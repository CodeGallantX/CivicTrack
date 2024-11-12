import path from 'path'; // Add this line at the top of your file
import fs from 'fs';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Link from 'next/link';

async function fetchPoliticians() {
  const filePath = path.join(process.cwd(), 'data', 'politicians.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData || '[]');
}

const Politicians = async () => {
  const politicians = await fetchPoliticians();

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
        <h2 className="text-3xl font-bold text-white text-center mb-8">Explore Politicians</h2>
        <p className="text-lg text-center text-white mb-10">
          Discover politicians involved in shaping the political landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {politicians.map((politician) => (
            <div key={politician.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 text-black shadow-lg shadow-cyan-500">
                <h3 className="text-xl font-semibold">{politician.name}</h3>
                <p className="text-sm">{politician.role}</p>
                <p className="mt-2">
                  A brief bio of the politician goes here, explaining their political career and contributions.
                </p>
                <Link href={`/politicians/portfolio/${politician.id}`}>
                  <button className="text-[#ffca0d] hover:underline mt-4 inline-block">View Portfolio</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Politicians;
