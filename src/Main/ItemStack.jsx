import React from "react";

const ItemStack = ({ img, alt, name, description }) => {
  return (
    <div className="w-full h-20 p-4 rounded-xl border border-gray-300  bg-gray-100 dark:bg-gray-900 flex items-center space-x-4 hover:bg-gray-200">
      <img src={img} alt={alt} className="h-12 rounded-md" />
      <div>
        <p className="font-bold text-gray-800 dark:text-gray-300">{name}</p>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export { ItemStack };
