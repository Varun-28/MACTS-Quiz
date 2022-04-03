import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({value:"", score: 0});

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
