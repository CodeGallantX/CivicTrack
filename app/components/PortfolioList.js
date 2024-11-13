const PortfolioList = ({ portfolios }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolios.map((project) => (
          <div key={project.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 text-black shadow-lg shadow-cyan-500">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <p className="mt-2"><strong>Status:</strong> {project.status}</p>
              <p className="mt-2"><strong>Budget:</strong> {project.budget}</p>
              <div className="mt-2">
                {project.relatedLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffca0d] hover:underline"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default PortfolioList;
  