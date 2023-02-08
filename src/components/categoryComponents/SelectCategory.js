import { useState } from "react";
import Category from "./Category";

import useFetch from "../../costumHooks/useFatch";

const SelectCategory = () => {
  const categories = useFetch("https://fakestoreapi.com/products/categories");
  
  return <div>
	<select>
      {categories?categories.map(category=><Category category={category}/>):null}
	</select>
  </div>;
};

export default SelectCategory;
