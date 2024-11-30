import path from 'path';
import fs from 'fs';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Link from 'next/link';
import FilterSidebar from '../components/FilterSidebar';
import PoliticianCards from '../components/PoliticianCards';

async function fetchPoliticians() {
  const filePath = path.join(process.cwd(), 'politiciansData', 'politicians.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData || '[]');
}

const PoliticiansPage = async () => {
  const politicians = await fetchPoliticians();

  return (
    <div className="bg-gray-900">
      <Header />
      <Banner page={{ title: 'Politicians', breadcrumb: [{ name: 'Politicians', path: '/politicians' }] }} />
      
      <div className="w-full px-10 xl:px-24 ">
      <h2 className="text-3xl font-bold text-white text-center my-8">Explore Politicians</h2>
          <p className="text-lg text-center text-white mb-10">
            Discover politicians involved in shaping the political landscape.
          </p>
      <div className="flex py-10 gap-10">
        <FilterSidebar politicians={politicians} />
        <div className="w-full lg:w-3/4">
          <PoliticianCards politicians={politicians} />
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default PoliticiansPage;
