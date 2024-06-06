import React from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => onCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
