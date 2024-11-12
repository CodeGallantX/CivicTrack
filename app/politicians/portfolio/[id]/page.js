// /app/politicians/portfolio/[id].js

import fs from 'fs';
import path from 'path';
import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Banner from '../../../components/Banner';

async function fetchPoliticians() {
  const filePath = path.join(process.cwd(), 'data', 'politicians.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData || '[]');
}

async function fetchPortfolio() {
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData || '[]');
}

const Portfolio = async ({ params }) => {
  const politicianId = parseInt(params.id, 10);  // Capture ID from the URL (e.g. /politicians/portfolio/1)
  const politicians = await fetchPoliticians();
  const portfolioData = await fetchPortfolio();

  // Find the politician by ID
  const politician = politicians.find((p) => p.id === politicianId);

  if (!politician) {
    return <p>Politician not found.</p>;
  }

  // Get the portfolio data for this politician
  const politicianPortfolios = portfolioData.filter(
    (portfolio) => portfolio.responsiblePoliticianId === politician.id
  );

  const page = {
    title: 'Portfolio',
    breadcrumb: [
      { name: 'Politicians', path: '/politicians' },
      { name: 'Portfolio', path: `/politicians/portfolio/${politicianId}` },
    ],
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      <Banner page={page} />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {politician.name}&apos;s Portfolio
        </h2>
        <p className="text-lg text-center text-white mb-10">
          Explore the portfolio of {politician.name}, learn about the projects they are involved in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {politicianPortfolios.map((project) => (
            <div key={project.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 text-black shadow-lg shadow-cyan-500">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="mt-2"><strong>Status:</strong> {project.status}</p>
                <p className="mt-2"><strong>Budget:</strong> {project.budget}</p>
                <div className="mt-2">
                  {project.relatedLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ffca0d] hover:underline"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
