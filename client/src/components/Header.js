import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        {/* Left section: Logo and Title */}
        <div className="flex items-center">
          {/* Add the logo image */}
          <Image
            src="/logo_anatomix.jpg"   // Path to your logo inside the public folder
            alt="Anatomix Logo"
            width={75}        // Adjust the width as needed
            height={75}       // Adjust the height as needed
            className="rounded-full" // Makes the image round
          />
          <div className="ml-3 text-3xl text-gray-900 titan-one-regular ">Anatomix</div>
        </div>
        
        {/* Right section: Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 transition hover:text-black">
            Home
          </Link>
          <Link href="/explore" className="text-gray-700 transition hover:text-black">
            Explore
          
          </Link>
        </div>
      </nav>
    </header>
  );
}
