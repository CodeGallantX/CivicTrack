import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const PoliticianCards = ({ politicians }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {politicians.map((politician) => (
        <div
          key={politician.id}
          className="bg-gray-200 group shadow-xl rounded-lg overflow-hidden duration-300 ease-in-out"
        >
          <div className="relative">
            <img
              src={politician.photo}
              alt={politician.name}
              className="w-full h-42 object-cover object-center"
            />
            <span className="bg-white group-hover:scale-110 transition-all duration-300 ease-in-out shadow-lg absolute -bottom-7 right-4 rounded-full p-1">
              <img 
                src={politician.flag}
                alt={politician.country}
                className="w-12 h-12 rounded-full object-cover object-center"
              />
            </span>
          </div>
          <div className="p-6 text-gray-800 h-1/3">
            <h3 className="text-2xl font-semibold text-gray-900">{politician.name}</h3>
            <p className="text-md text-gray-500 mb-3">{politician.position} • {politician.country}</p>
            <p className="text-sm text-gray-600 mb-4">{politician.shortBio}</p>

            <div className="flex items-center space-x-3 mb-4">
              {politician.socialMedia.twitter && (
                <Link
                  href={politician.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaTwitter size={20} />
                </Link>
              )}
              {politician.socialMedia.facebook && (
                <Link
                  href={politician.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaFacebook size={20} />
                </Link>
              )}
            </div>

            <Link href={`/politicians/portfolio/${politician.id}`}>
              <button className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition duration-200">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoliticianCards;
