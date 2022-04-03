import React from "react";
import "./category.css";
import { categoryData } from "../../data/categoryData";
import { useCategory } from "../../utils/category-context";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  const { setSelectedCategory } = useCategory();

  function categoryHandler(categoryValue){
    setSelectedCategory(val =>( {...val, value: categoryValue}));
    navigate("/quiz");
  }

  return (
    <div className="category-container flex flex-col items-center p-8 gap-8">
      {categoryData.map(
        ({
          id,
          categoryName,
          categoryDescription,
          categoryImage,
          categoryValue,
        }) => (
          <div key={id} className="category-card flex items-center"
          onClick={() => categoryHandler(categoryValue)}
          >
            <div>
              <img
                className="category-card-img w-48"
                src={categoryImage}
                alt="category-card"
              />
            </div>
            <div className="card-texts">
              <h4 className="card-title">{categoryName}</h4>
              <p className="card-subTitle">{categoryDescription}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export { Category };
