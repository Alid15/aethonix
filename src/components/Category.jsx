import React from "react";
import { getData } from "../context/DataContext";
import { Navigate, useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => Navigate(`/category/${item}`)}
                className="uppercase bg-[#06a055] hover:bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
