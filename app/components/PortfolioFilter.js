"use client"
import { useState } from 'react';

const PortfolioFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, year: selectedYear, tags: selectedTags });
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    onFilterChange({ category: selectedCategory, year, tags: selectedTags });
  };

  const handleTagChange = (tag, isChecked) => {
    const updatedTags = isChecked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
    onFilterChange({ category: selectedCategory, year: selectedYear, tags: updatedTags });
  };

  return (
    <div className="w-1/4 hidden lg:block p-4 bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold text-gray-200">Filter Portfolio</h2>

      <div>
        <h3 className="text-lg text-gray-400">Categories</h3>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full bg-gray-700 text-gray-300 p-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg text-gray-400">Year</h3>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="w-full bg-gray-700 text-gray-300 p-2 rounded"
        >
          <option value="">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div>
        <h3 className="text-lg text-gray-400">Tags</h3>
        <div className="space-x-2">
          <label className="inline-flex items-center text-gray-300">
            <input
              type="checkbox"
              value="Green"
              checked={selectedTags.includes('Green')}
              onChange={(e) => handleTagChange('Green', e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">Green</span>
          </label>
          <label className="inline-flex items-center text-gray-300">
            <input
              type="checkbox"
              value="Sustainability"
              checked={selectedTags.includes('Sustainability')}
              onChange={(e) => handleTagChange('Sustainability', e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">Sustainability</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;