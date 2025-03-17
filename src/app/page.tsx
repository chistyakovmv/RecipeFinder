'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const cuisines = ['Italian', 'Mexican', 'Chinese'] as const;
type CuisineType = (typeof cuisines)[number];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<CuisineType | ''>('');
  const [maxTime, setMaxTime] = useState<string>('');

  const isButtonDisabled = !query && !cuisine && !maxTime;

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxReadyTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  }, [query, cuisine, maxTime, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        Find Your Perfect Recipe
      </h1>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <input
          type="text"
          aria-label="Search for a recipe"
          placeholder="Search for a recipe..."
          className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          aria-label="Select Cuisine"
          className="w-full p-3 mt-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all cursor-pointer"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value as CuisineType | '')}
        >
          <option value="">Select Cuisine</option>
          {cuisines.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          type="number"
          aria-label="Max preparation time"
          placeholder="Max preparation time (minutes)"
          className="w-full p-3 mt-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
          value={maxTime}
          onChange={(e) => setMaxTime(e.target.value)}
        />
        <button
          className={`w-full p-3 mt-6 text-white font-bold rounded-lg transition-all ${
            isButtonDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 shadow-md'
          }`}
          onClick={handleSearch}
          disabled={isButtonDisabled}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
