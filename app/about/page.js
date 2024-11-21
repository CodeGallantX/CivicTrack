import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const App = () => {
  const page = {
    title: 'About',
    breadcrumb: [
      { name: 'About', path: '/about' }
    ]
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      <Header />
      <Banner page={page} />
      
      <main className="px-10 lg:px-24 py-12 space-y-12">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#ffca0d]">Our Initiative</h2>
          <p className="">
            CivicTrack is dedicated to advancing political transparency and accountability across African communities.
            Our platform empowers citizens to track the performance and promises of political leaders, providing a
            comprehensive database accessible to all. By equipping people with knowledge, CivicTrack inspires informed
            civic participation and a proactive approach to governance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#ffca0d]">Our Mission</h2>
          <p className="">
            Our mission is to bridge the gap between leaders and citizens by providing accessible, accurate, and 
            up-to-date information on political figures and their commitments. CivicTrack seeks to foster a culture 
            of accountability, helping citizens make informed decisions and encouraging leaders to prioritize 
            transparency in their roles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#ffca0d]">Our Vision</h2>
          <p className="">
            We envision a world where every citizen holds the power to advocate for change, with the information 
            they need right at their fingertips. CivicTrack aspires to be the leading platform for political 
            transparency in Africa, ultimately contributing to a future where informed citizens drive sustainable 
            development and meaningful governance.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
