import { useEffect } from 'react';
import aos from 'aos/dist/aos.css';
import AOS from 'aos';

const AccountabilityRecords = ({ records }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true
    });
  });

  return (
    <div className="w-full">
      {records.map((record) => (
        <div key={record.id} className="overflow-hidden rounded-lg shadow-lg">
          <div
            data-aos="flip-right"
            className="p-4 bg-gradient-to-tl from-gray-800 via-red-700 to-yellow-800 mt-4 rounded-lg"
          >
            <h4
              data-aos="fade-down"
              data-aos-duration="2000"
              className="text-xl font-semibold text-white"
            >
              Accountability Records
            </h4>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
            >
              {record.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="p-4 h-full">
                    <h5
                      data-aos="fade-right"
                      data-aos-duration="3000"
                      className="font-semibold text-lg"
                    >
                      {item.title}
                    </h5>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="3000"
                      className="text-sm text-gray-300 mt-2"
                    >
                      {item.description}
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className="mt-2 text-xs text-yellow-300"
                    >
                      Year: {item.year}
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className="mt-2 text-xs text-gray-400 italic"
                    >
                      Criticism: {item.criticism}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountabilityRecords;