"use client";
import { useParams } from "next/navigation";
import React from "react";
import { productsData } from "../../../components/data/db.js";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();

  // Filter the productsData by matching the slug in lowercase
  const data = productsData.filter(
    (product) => product.slug.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div>
      {data.length > 0 ? (
        <section>
          <div>
            {data[0].alter !== true ? (
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      {data[0].productName}
                    </h1>
                    <div className="mb-8 leading-relaxed">
                      <ul className="list-disc pl-5">
                        {data[0].sailentFeatures.map((data: any, i: any) => (
                          <li key={i} className="mb-2">
                            {data.point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={data[0].imgSrc}
                    />
                  </div>
                </div>
              </section>
            ) : (
              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={data[0].imgSrc}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      {data[0].productName}
                    </h1>
                    <div className="mb-8 leading-relaxed">
                      <ul className="list-disc pl-5">
                        {data[0].sailentFeatures.map((data: any, i: any) => (
                          <li key={i} className="mb-2">
                            {data.point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Technical Specification
            </h1>

            <p className="mt-3 text-gray-600 ">
              Stay in the know with insights from industry experts.
            </p>
          </div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-900">
                      Product Range
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {data[0].technicalSpecification.productRange}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border shadow-sm rounded-xl">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-900">
                      Pressure
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                      {data[0].technicalSpecification.productRange}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Fuel Range
            </h1>

            <p className="mt-3 text-gray-600 ">
              Stay in the know with insights from industry experts.
            </p>
          </div>
          <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
              {data[0].fuelUsed.map((data, i) => (
                <div key={i} className="text-center">
                  <img
                    className="rounded-full size-24 mx-auto"
                    src={data.imgurl}
                    alt="Avatar"
                  />
                  <div className="mt-2 sm:mt-4">
                    <h3 className="font-medium text-gray-800 ">{data.fuel}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="border border-gray-200 py-2 px-3 rounded-full dark:border-neutral-700">
                <div className="flex items-center gap-x-3">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    Want to know more
                  </span>
                  <a
                    className="inline-flex items-center gap-x-2 text-sm font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:text-orange-500 "
                    href="/contact"
                  >
                    Contact Us
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Page;
