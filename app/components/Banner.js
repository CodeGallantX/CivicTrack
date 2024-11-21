import React from 'react';
import Link from 'next/link';

const Banner = ({ page }) => {
  return (
    <div className="pt-10 md:pt-20">
    <div className="relative bg-gradient-to-tr from-gray-900 to-purple-800 w-full h-[250px] flex flex-col justify-center items-start px-10 xl:px-24">
      <div className="text-left z-10 mt-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">{page.title}</h2>

        <nav aria-label="breadcrumb" className="text-sm text-gray-100">
          <ol className="list-reset flex space-x-2">
            <li>
              <Link href="/" className="text-gray-100 hover:underline">Home</Link>
            </li>
            <li>/</li>
            {page.breadcrumb.map((crumb, index) => (
              <React.Fragment key={index}>
                <li>
                  {crumb.path ? (
                    <Link href={crumb.path} className="text-[#ffca0d] hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-gray-100">{crumb.name}</span>
                  )}
                </li>
                {index < page.breadcrumb.length - 1 && <li>/</li>}
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Banner;
