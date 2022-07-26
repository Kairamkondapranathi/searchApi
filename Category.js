import React, {useEffect, useState} from 'react'
const Category = ({ getCategory }) => {
  const [category, setCategory] = useState();

  const updateCategory = async (code) => {
    setCategory(code);
  };

  useEffect(() => {
    updateCategory();
  }, []);

  useEffect(() => {
    getCategory(category);
  }, [category]);

  return (
    <div>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => {
          updateCategory(e.target.value);
        }}
      >
        <option selected>Category</option>
        <option value="business">Business</option>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>
    </div>
  );
};

export default Category

