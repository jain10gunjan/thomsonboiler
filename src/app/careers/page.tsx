import React from "react";

// Mock data for job positions
const mockData = [
  {
    position: "Product Manager, Instagram Camera",
    department: "Marketing",
    commitment: "Full Time",
    location: "Remote",
  },
  {
    position: "Research Director",
    department: "Customer Success",
    commitment: "Full Time",
    location: "Miami",
  },
  {
    position: "Customer Success Manager",
    department: "Marketing",
    commitment: "Full Time",
    location: "San Francisco",
  },
  {
    position: "Engineering Manager",
    department: "Software Engineering",
    commitment: "Freelance",
    location: "Boston",
  },
  {
    position: "Product Designer",
    department: "Design",
    commitment: "Full Time",
    location: "Los Angeles",
  },
];

const JobTable = () => {
  return (
    <div className="mt-24 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto min-h-screen ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Careers at Thomson Boiler
        </h1>

        <p className="mt-3 text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-6">
          <div className="py-8 lg:pe-8">
            {mockData.map((job, index) => (
              <div key={index} className="mb-6 p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                <p className="text-gray-700">Department: {job.department}</p>
                <p className="text-gray-700">Commitment: {job.commitment}</p>
                <p className="text-gray-700">Location: {job.location}</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-blue-500 underline"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTable;
