import React from 'react';
import { useCategory } from '../../utils/category-context';
import "./result.css";

function Result() {
  const { selectedCategory} = useCategory();
  return (
    <div className='my-4 flex flex-col items-center'>
      <h2 className='result-heading my-4'>Quiz Result</h2>
      <h4 className='my-4'>Your Score: <span className='score'>{selectedCategory.score}</span></h4>
    </div>
  )
}

export {Result};