'use client'; // This is necessary for Client Components

import React, { useState, useEffect } from 'react';

const FilterSidebar = ({ politicians }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [filteredPoliticians, setFilteredPoliticians] = useState(politicians);

  const handleFilterChange = (type, value) => {
    if (type === 'name') {
      setSearchQuery(value);
    } else if (type === 'role') {
      setRoleFilter(value);
    }
  };

  // Filter politicians based on search and role
  useEffect(() => {
    let result = politicians;

    if (searchQuery) {
      result = result.filter((politician) =>
        politician.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (roleFilter) {
      result = result.filter((politician) =>
        politician.role && politician.role.toLowerCase().includes(roleFilter.toLowerCase()) // Safe check for role
      );
    }

    setFilteredPoliticians(result);
  }, [searchQuery, roleFilter, politicians]);

  return (
    <div className="w-1/4 hidden lg:block bg-gray-800 text-white p-5 rounded-md shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Filter Politicians</h3>

      {/* Name filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Search by Name</label>
        <input
          type="text"
          placeholder="Search name..."
          value={searchQuery}
          onChange={(e) => handleFilterChange('name', e.target.value)}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        />
      </div>

      {/* Role filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Filter by Role</label>
        <select
          onChange={(e) => handleFilterChange('role', e.target.value)}
          value={roleFilter}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        >
          <option value="">All Roles</option>
          <option value="Senator">Senator</option>
          <option value="Governor">Governor</option>
          <option value="President">President</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
