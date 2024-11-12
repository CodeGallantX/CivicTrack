"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PortfolioFilter from '../../../components/PortfolioFilter';
import Profile from '../../../components/Profile';
import FeaturedPortfolios from '../../../components/FeaturedPortfolios';
import PortfolioList from '../../../components/PortfolioList';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from '../../../components/Banner';

async function fetchPoliticians() {
  try {
    const res = await fetch('/data/politicians.json');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching politicians data:", error);
    return [];
  }
}

async function fetchPortfolio() {
  try {
    const res = await fetch('/data/portfolio.json');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return [];
  }
}

export default function Portfolio() {
  const { id } = useParams();
  const politicianId = parseInt(id, 10);

  const [politicians, setPoliticians] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const [featuredPortfolios, setFeaturedPortfolios] = useState([]);
  const [politician, setPolitician] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const politiciansData = await fetchPoliticians();
      const portfolioData = await fetchPortfolio();

      setPoliticians(politiciansData);
      setPortfolioData(portfolioData);

      const currentPolitician = politiciansData.find((p) => p.id === politicianId);
      if (currentPolitician) {
        setPolitician(currentPolitician);

        const politicianPortfolios = portfolioData.filter(
          (portfolio) => portfolio.responsiblePoliticianId === currentPolitician.id
        );
        setFilteredPortfolios(politicianPortfolios);
        setFeaturedPortfolios(politicianPortfolios.slice(0, 3));
      }
    }

    fetchData();
  }, [politicianId]);

  const handleFilterChange = (filters) => {
    const { category, year, tags } = filters;
    const filtered = portfolioData.filter((portfolio) => {
      const matchesCategory = category ? portfolio.category === category : true;
      const matchesYear = year ? portfolio.year === year : true;
      const matchesTags = tags.length ? tags.every(tag => portfolio.tags.includes(tag)) : true;
      return matchesCategory && matchesYear && matchesTags;
    });
    setFilteredPortfolios(filtered);
  };

  const page = {
    title: politician ? politician.name : 'Loading...',
    breadcrumb: [
      { name: 'Politicians', path: '/politicians' },
      { name: politician ? politician.name : 'Politician', path: `/politicians/portfolio/${politicianId}` },
    ],
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      <Banner page={page} />
      <div className="px-10 xl:px-24 py-10 flex">
        <PortfolioFilter onFilterChange={handleFilterChange} />
        <div className="w-full lg:w-3/4 p-0 lg:px-4 ml-8">
          {politician && <Profile politician={politician} />}
          <FeaturedPortfolios portfolios={featuredPortfolios} />
          <PortfolioList portfolios={filteredPortfolios} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
