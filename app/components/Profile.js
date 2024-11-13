import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const PoliticianProfile = ({ politician }) => {
    if (!politician) {
      return <div>Loading...</div>;
    }

    return (
      <div className="bg-gray-900">
        <div className="w-full p-0">
          <div className="bg-gray-800 p-6 lg:p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <img
              src={politician.photo}
              alt={politician.name}
              className="w-32 h-32 md:w-48 md:h-48 object-cover object-center rounded-full border-4 border-cyan-500 mb-4 md:mb-0"
            />
            <img
              src={politician.flag}
              alt={politician.country}
              className="w-32 h-32 md:w-48 md:h-48 object-cover object-center float-none lg:float-right mb-4 md:mb-0"
            />
            
            <div className="text-white md:ml-8">
              <h2 className="text-2xl md:text-3xl font-bold">{politician.name}</h2>
              <p className="text-lg md:text-xl font-semibold text-gray-300">
                {politician.position} of {politician.country}
              </p>
              <p className="text-sm md:text-md italic">Nickname: {politician.nickname}</p>
              <p className="mt-4 text-sm md:text-base">{politician.longBio}</p>

              <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold">Key Achievements:</h3>
                <ul className="list-disc pl-6 text-sm md:text-base">
                  {Array.isArray(politician.achievements) && politician.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-300">{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-sm md:text-base">Born in:</p>
                <p className="text-gray-300 text-sm md:text-base">{politician.birthplace}</p>
                <p className="font-semibold text-sm md:text-base">State:</p>
                <p className="text-gray-300 text-sm md:text-base">{politician.state}</p>
                <p className="font-semibold text-sm md:text-base">Born:</p>
                <p className="text-gray-300 text-sm md:text-base">{politician.dateOfBirth}</p>
              </div>

              <div className="mt-6">
                <p className="font-semibold text-sm md:text-base">Social Media:</p>
                <ul className="flex flex-wrap space-x-4 mt-2 text-sm md:text-base">
                  {politician.socialMedia?.twitter && (
                    <li><a href={politician.socialMedia.twitter} target="_blank" className="text-white text-xl hover:text-[#ffca0d]"><FaXTwitter/></a></li>
                  )}
                  {politician.socialMedia?.facebook && (
                    <li><a href={politician.socialMedia.facebook} target="_blank" className="text-white text-xl hover:text-[#ffca0d]"><FaFacebook/></a></li>
                  )}
                  {politician.socialMedia?.linkedin && (
                    <li><a href={politician.socialMedia.linkedin} target="_blank" className="text-white text-xl hover:text-[#ffca0d]"><FaLinkedin/></a></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PoliticianProfile;
