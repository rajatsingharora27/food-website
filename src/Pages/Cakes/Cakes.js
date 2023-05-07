import React from "react";

function Cakes() {
  return (
    <div>
      <div className="relative">
        {/* Common page Banner */}

        <img
          src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner.jpg?v=1679214987"
          alt=""
          className="h-auto max-w-full"
        />
        <div className="absolute left-1/3 top-1/3 md:left-1/2 md:top-1/2">
          <h1 className="font-sans text-4xl">Cakes</h1>
        </div>
      </div>
      <div>FILTER BAR</div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src="https://source.unsplash.com/random/300x300/?1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
  );
}

export default Cakes;
