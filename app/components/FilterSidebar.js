'use client'; // This is necessary for Client Components

import React, { useState, useEffect } from 'react';

const FilterSidebar = ({ politicians }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [partyFilter, setPartyFilter] = useState('');
  const [ageRangeFilter, setAgeRangeFilter] = useState([0, 100]);
  const [genderFilter, setGenderFilter] = useState('');
  const [filteredPoliticians, setFilteredPoliticians] = useState(politicians);

  const handleFilterChange = (type, value) => {
    switch (type) {
      case 'name':
        setSearchQuery(value);
        break;
      case 'role':
        setRoleFilter(value);
        break;
      case 'country':
        setCountryFilter(value);
        break;
      case 'party':
        setPartyFilter(value);
        break;
      case 'gender':
        setGenderFilter(value);
        break;
      case 'ageRange':
        setAgeRangeFilter(value);
        break;
      default:
        break;
    }
  };

  // Filter politicians based on all selected filters
  useEffect(() => {
    let result = politicians;

    if (searchQuery) {
      result = result.filter((politician) =>
        politician.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (roleFilter) {
      result = result.filter((politician) =>
        politician.role && politician.role.toLowerCase().includes(roleFilter.toLowerCase())
      );
    }

    if (countryFilter) {
      result = result.filter((politician) =>
        politician.country && politician.country.toLowerCase().includes(countryFilter.toLowerCase())
      );
    }

    if (partyFilter) {
      result = result.filter((politician) =>
        politician.party && politician.party.toLowerCase() === partyFilter.toLowerCase()
      );
    }

    if (genderFilter) {
      result = result.filter((politician) =>
        politician.gender && politician.gender.toLowerCase() === genderFilter.toLowerCase()
      );
    }

    // Age Range Filter (assumes politician.age is a number)
    result = result.filter((politician) =>
      politician.age >= ageRangeFilter[0] && politician.age <= ageRangeFilter[1]
    );

    setFilteredPoliticians(result);
  }, [searchQuery, roleFilter, countryFilter, partyFilter, ageRangeFilter, genderFilter, politicians]);

  return (
    <div className="w-1/4 hidden lg:block bg-gray-800 text-white p-5 rounded-md shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Filter Politicians</h3>

      {/* Name Filter */}
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

      {/* Role Filter */}
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

      {/* Country Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Filter by Country</label>
        <select
          onChange={(e) => handleFilterChange('country', e.target.value)}
          value={countryFilter}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        >
          <option value="">All Countries</option>
          <option value="NG">Nigeria</option>
          <option value="KE">Kenya</option>
          <option value="SA">South Africa</option>
          <option value="TG">Togo</option>
          <option value="GH">Ghana</option>
          <option value="UG">Uganda</option>
          <option value="TZ">Tanzania</option>
          <option value="ET">Ethiopia</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
          <option value="CI">Ivory Coast</option>
          <option value="SN">Senegal</option>
          <option value="MW">Malawi</option>
          <option value="RW">Rwanda</option>
          <option value="MZ">Mozambique</option>
          <option value="CD">Democratic Republic of the Congo</option>
          <option value="CM">Cameroon</option>
          <option value="DZ">Algeria</option>
          <option value="EG">Egypt</option>
          <option value="MA">Morocco</option>
          <option value="TN">Tunisia</option>
          <option value="LY">Libya</option>
        </select>
      </div>


      {/* Party Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Filter by Party</label>
        <input
          type="text"
          placeholder="Party affiliation..."
          value={partyFilter}
          onChange={(e) => handleFilterChange('party', e.target.value)}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        />
      </div>

      {/* Gender Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Filter by Gender</label>
        <select
          onChange={(e) => handleFilterChange('gender', e.target.value)}
          value={genderFilter}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Age Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Filter by Age Range</label>
        <input
          type="number"
          placeholder="Min Age"
          value={ageRangeFilter[0]}
          onChange={(e) => handleFilterChange('ageRange', [Number(e.target.value), ageRangeFilter[1]])}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="number"
          placeholder="Max Age"
          value={ageRangeFilter[1]}
          onChange={(e) => handleFilterChange('ageRange', [ageRangeFilter[0], Number(e.target.value)])}
          className="mt-2 px-3 py-2 rounded-md w-full bg-gray-700 text-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
