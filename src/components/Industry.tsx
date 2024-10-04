import React from "react";

const Industry = () => {
  return (
    <div>
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Industry
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">Industry</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="text-center">
            <img
              className="rounded-full size-24 mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                David Forren
              </h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Founder / CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
