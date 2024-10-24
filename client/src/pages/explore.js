// About page
import Layout from '../components/Layout';

export default function Explore() {
  return (
    <Layout>   
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
    {/* Top Section */}
    <div className="mb-8 text-center">
    <h1 className="wt-title-better">
    Let's learn more, better & faster.
    </h1>
    <div className="h-12 mt-4 bg-white center w-80"></div> {/* Empty rectangle */}
    </div>
    
    {/* Main Content */}
    <div className="flex flex-col items-center">
    <div className="flex items-center justify-center space-x-8">
    {/* Left Buttons */}
    <div className="flex flex-col space-y-4">
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Bras</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Main</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Jambes</button>
    </div>
    
    {/* Middle Image */}
    <div className="flex justify-center">
    <img
    src="/path-to-image" // You can replace this with an actual path or link to the image
    alt="Body"
    className="h-80" // Adjust the height as needed
    />
    </div>
    
    {/* Right Buttons */}
    <div className="flex flex-col space-y-4">
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Tête</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Tors</button>
    <button className="px-4 py-2 text-gray-800 bg-white rounded">Pieds</button>
    </div>
    </div>
    </div>
    
    {/* Bottom Search Bar */}
    <div className="mt-8">
    <input
    type="text"
    placeholder="Recherche d'une partie du corps"
    className="p-3 bg-white rounded w-96"
    />
    </div>
    </div>
    </Layout>
  );
}
