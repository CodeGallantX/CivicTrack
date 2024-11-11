"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const App = () => {
  const page = {
    title: 'Contact',
    breadcrumb: [
      { name: 'Contact', path: '/contact' }
    ]
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your review!');
    setFormData({ name: '', email: '', review: '' });
  };

  return (
    <div className="font-sans bg-gray-900">
      <Header />
      <Banner page={page} />
      <section className='bg-gray-900 px-10 xl:px-24 pt-16 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-10 xl:gap-0'>
        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3 text-white">
          <h3 className="text-[18px] font-semibold">HELLO</h3>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold">Get in Touch</h1>
          <p className='text-[18px] w-full lg:w-10/12'>We&rsquo;re here to help! Whether you have a question, need assistance, or just want to give feedback, feel free to reach out to us.</p>

          <div className='flex flex-col text-[18px] lg:text-xl font-semibold xl:text-[28px] gap-3'>
            <a href="https://github.com/codegallantx" target='_blank' className="flex flex-row items-center group">
              <FaGithub className="text-2xl" />
              <span className="ml-4 group-hover:text-[#ffca0d] transition-all duration-300 ease-in-out">CodeGallantX</span>
            </a>
            <a href="https://www.linkedin.com/john-samuel-cgx" target='_blank' className="flex flex-row items-center group">
              <FaLinkedin className="text-2xl group-hover:text-[#ffca0d]" />
              <span className="ml-4 group-hover:text-[#ffca0d] transition-all duration-300 ease-in-out">John Samuel</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3">
          <h3 className="text-[18px] font-semibold text-white">Leave A Review</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <fieldset className="w-full flex flex-row justify-between gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="px-8 py-4 border w-full text-gray-200 border-gray-300 rounded-full bg-gray-900 outline-none focus:ring-1 focus:ring-[#ffca0d] focus:border-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="px-8 py-4 border w-full text-gray-200 border-gray-300 rounded-full bg-gray-900 outline-none focus:ring-1 focus:ring-[#ffca0d] focus:border-none"
              required
            />
            </fieldset>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              placeholder="Your Review"
              className="px-4 py-2 border text-gray-200 border-gray-300 rounded-2xl bg-gray-900 outline-none focus:ring-1 focus:ring-[#ffca0d] focus:border-none"
              rows="8"
              required
            />
            <button type="submit" className="px-6 py-4 mt-4 w-[200px] bg-none border border-[#ffca0d]  text-white font-semibold rounded-full hover:bg-[#ffca0d] hover:text-gray-900">
              Submit Review
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
