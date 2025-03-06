import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-blue-600">TutorChase</h1>
      <nav>
        <ul className="flex text-blue-600 space-x-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        <Link href="/login">Login</Link>
      </button>
    </div>
  </header>
);

export default Header;
