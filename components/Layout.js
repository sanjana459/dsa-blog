// components/Layout.js
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner />
      <main className="flex-grow max-w-3xl mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
