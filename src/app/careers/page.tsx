"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// Mock data for job positions

const JobTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.steinhq.com/v1/storages/670568664d11fd04f035e50e/Sheet2"
        );
        setData(response.data);
        console.log(response.data); // Check the fetched data in console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="mt-24 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto min-h-screen ">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Careers @ Remax Boilers
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-6">
          <div className="py-8 lg:pe-8">
            {data?.map((job: any, index: any) => (
              <div key={index} className="mb-6 p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                {job.department ? (
                  <p className="text-gray-700">Department: {job.department} </p>
                ) : null}
                {job.commitment ? (
                  <p className="text-gray-700">Commitment: {job.commitment} </p>
                ) : null}
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
