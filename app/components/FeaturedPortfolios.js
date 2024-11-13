const FeaturedPortfolios = ({ portfolios }) => {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-200">Featured Portfolios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="group relative bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-cyan-500 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  {portfolio.description}
                </p>
              </div>
  
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedPortfolios;
  