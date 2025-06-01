// components/Footer.js

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full">
      {/* Dark gray strip: full width */}
      <div className="bg-gray-800 text-white py-4 w-full">
        <div className="max-w-5xl mx-auto px-6 flex justify-center space-x-6">
          <a
            href="https://leetcode.com/u/gsanjanareddy459/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/sanjana459"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanjana-gurrappagaru-949878243/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Light gray strip: full width */}
      <div className="bg-gray-100 text-gray-600 text-sm py-2 w-full">
        <div className="max-w-5xl mx-auto px-6 text-center">
          © {year} sanjanareddyg
        </div>
      </div>
    </footer>
  );
}
