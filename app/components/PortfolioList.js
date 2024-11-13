const PortfolioList = ({ portfolios }) => {
  return (
    <div className="w-full">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="overflow-hidden rounded-lg shadow-lg">
          {/* <div className="relative">
            <img
              src={portfolio.img}
              alt={portfolio.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
          </div>

          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold">{portfolio.title}</h3>
            <p className="text-sm mt-2">{portfolio.description}</p>
            <p className="mt-2">
              <strong>Status:</strong> {portfolio.status}
            </p>
            <p className="mt-2">
              <strong>Impact:</strong> {portfolio.impact}
            </p>
          </div> */}

          <div className="p-4 bg-gradient-to-tl from-gray-800 via-pink-700 to-purple-800  mt-4 rounded-lg">
            <h4 className="text-xl font-semibold text-white">Other Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {portfolio.otherProjects.map((project, idx) => {
                // Conditional status class based on project status
                let statusClass = '';
                if (project.status === 'Completed') {
                  statusClass = 'text-green-500'; // Success theme
                } else if (project.status === 'Ongoing') {
                  statusClass = 'text-yellow-500'; // Warning theme
                } else if (project.status === 'Failed' || project.status === 'Cancelled') {
                  statusClass = 'text-red-500'; // Danger theme
                }

                return (
                  <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h5 className="font-semibold text-lg">{project.title}</h5>
                      <p className={`text-xs mt-2 ${statusClass}`}>{project.status}</p>
                      <p className="mt-2 text-sm text-gray-300">{project.impact}</p>
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
