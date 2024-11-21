import { useEffect } from 'react';
import aos from 'aos/dist/aos.css';
import AOS from 'aos';


const PortfolioList = ({ portfolios }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true
    });
  });

  return (
    <div className="w-full">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="overflow-hidden rounded-lg shadow-lg">
          <div data-aos="flip-right" className="p-4 bg-gradient-to-tl from-gray-800 via-pink-700 to-purple-800  mt-4 rounded-lg">
            <h4 data-aos="fade-down" data-aos-duration="2000" className="text-xl font-semibold text-white">Other Projects</h4>
            <div data-aos="fade-up" data-aos-duration="3000" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {portfolio.otherProjects.map((project, idx) => {
                let statusClass = '';
                if (project.status === 'Completed') {
                  statusClass = 'text-green-500 bg-green-100 border border-green-500 rounded-full py-1 px-2';
                } else if (project.status === 'Ongoing') {
                  statusClass = 'text-yellow-500 bg-yellow-100 border border-yellow-500 rounded-full py-1 px-2';
                } else if (project.status === 'Failed' || project.status === 'Cancelled') {
                  statusClass = 'text-red-500 bg-red-100 border border-red-500 rounded-full py-1 px-2';
                }

                return (
                  <div key={idx} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 h-1/3">
                      <h5 data-aos="fade-right" data-aos-duration="3000" className="font-semibold text-lg">{project.title}</h5>
                      <p data-aos="fade-left" data-aos-duration="3000" className={`absolute top-2 right-2 text-xs mt-2 w-20 text-center ${statusClass}`}>{project.status}</p>
                      <p data-aos="fade-up" data-aos-duration="3000" className="mt-2 text-sm text-gray-300">{project.impact}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
