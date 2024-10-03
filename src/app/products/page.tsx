"use client";
import React from "react";
import { productsData } from "../../components/data/db.js";

const ProductsPage: React.FC = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // const filteredProducts =
  //   selectedCategory === "All"
  //     ? productsData
  //     : productsData.filter((productsData) => product.category === selectedCategory);

  return (
    <>
      <div className="pt-12 pb-2 2xl:pb-2 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="pb-4 text-center border-b border-black border-opacity-5">
            <div className="relative">
              <h2 className="mb-5 md:mb-0 text-4xl lg:text-7xl  leading-normal font-heading font-medium text-center">
                <span className="text-orange-400">Our Range</span> Of Products
              </h2>
            </div>
          </div>
          <section>
            {productsData.map((data, index) => (
              <div key={index}>
                {data.alter !== true ? (
                  <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                          {data.productName}
                        </h1>
                        <div className="mb-8 leading-relaxed">
                          <ul className="list-disc pl-5">
                            {data.sailentFeatures.map(
                              (data: any, i: number) => (
                                <li key={i} className="mb-2">
                                  {data.point}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                          className="object-cover object-center rounded"
                          alt="hero"
                          src={data.imgSrc}
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
                          src={data.imgSrc}
                        />
                      </div>
                      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                          {data.productName}
                        </h1>
                        <div className="mb-8 leading-relaxed">
                          <ul className="list-disc pl-5">
                            {data.sailentFeatures.map((data: any, i: any) => (
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
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
