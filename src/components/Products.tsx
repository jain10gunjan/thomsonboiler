import { productsData } from "../components/data/db.js";

export default function Products() {
  return (
    <>
      <section
        className="py-8 md:py-12 lg:py-8"
        x-data="{ showContent: false }"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-xs mx-auto md:max-w-7xl">
            <div className="flex flex-wrap -mx-4 mb-14 justify-between">
              <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                <h2 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight  ">
                  Our products
                </h2>
              </div>
              <div className="w-full md:w-1/2 px-4 md:text-right">
                <a
                  className="inline-flex h-12 py-2 px-4 items-center justify-center text-sm font-medium text-orange-500 hover:text-white bg-white border border-orange-500 rounded-sm hover:bg-orange-500 transition duration-200"
                  href="/products"
                >
                  Show more
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 -mb-8 space-x-0">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 "
                >
                  <a
                    className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden"
                    href={`/products/${product.slug}`}
                  >
                    <div className="flex items-center h-80">
                      <img
                        className="block w-full h-80 rounded-xl"
                        src={product.imgSrc}
                        alt={product.productName}
                      />
                    </div>
                    <div className="relative py-8 text-center">
                      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-orange-500 uppercase rounded-full group-hover:bg-purple-500 transition duration-200">
                        {product.productName}
                      </span>
                      <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">
                        {product.tagLine}
                      </span>

                      <a
                        href={`/products/${product.slug}`}
                        className="mt-2 block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200"
                      >
                        Click Here
                      </a>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
