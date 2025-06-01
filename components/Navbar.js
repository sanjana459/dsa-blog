// components/Navbar.js
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { topics } from '../data/topics';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchWrapper = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchWrapper.current && !searchWrapper.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = topics.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand on left */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="CodeChronicles Logo" width={40} height={40} priority />
          <span className="text-2xl font-bold text-white">CodeChronicles</span>
        </Link>

        {/* Home + Search on right */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>

          {/* Search icon + dropdown */}
          <div className="relative" ref={searchWrapper}>
            <button
              onClick={() => {
                setShowSearch((v) => !v);
                setSearchTerm('');
              }}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a7 7 0 017 7 7 7 0 11-7-7zM21 21l-4.35-4.35"
                />
              </svg>
            </button>

            {showSearch && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 rounded-t-md focus:outline-none text-gray-800"
                />
                <div className="max-h-60 overflow-y-auto">
                  {filtered.length > 0 ? (
                    filtered.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/topics/${t.slug}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowSearch(false)}
                      >
                        {t.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No matches</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
);
}
