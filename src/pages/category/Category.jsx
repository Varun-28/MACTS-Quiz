import React from 'react';
import "./category.css";
import { categoryData } from '../../data/categoryData';


function Category() {
  return (
    <div className='category-container flex flex-col items-center p-8 gap-8'>
    {
      categoryData.map(({id, categoryName, categoryDescription, categoryImage, categoryValue}) => 
      <div key={id} className="category-card flex items-center">
          <div>
            <img className='category-card-img w-48' src={categoryImage} alt="category-card" />
          </div>
          <div className="card-texts">
            <h4 className="card-title">{categoryName}</h4>
            <p className="card-subTitle">{categoryDescription}</p>
          </div>
      </div>
      )
    }
    </div>
  )
}

export {Category};