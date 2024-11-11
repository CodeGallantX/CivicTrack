import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

const App = () => {
  const page = {
    title: 'Portfolio',
    breadcrumb: [
      { name: 'Politicians', path: '/politicians' },
      { name: 'Portfolio', path: '/portfolio' }
    ]
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      <Banner page={page} />
      <Footer />
    </div>
  );
};

export default App;
