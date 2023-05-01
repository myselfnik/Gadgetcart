import "./Category.scss";
import Products from "../Products/Products";

import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(`/api/products?populate=*`);
  let filteredData = {
    data: [],
  };
  if (data && data.data) {
    filteredData.data = data.data.filter((el) => el.attributes.catid == id);
  }

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
        <Products innerPage={true} products={filteredData} key={id.id} />
      </div>
    </div>
  );
};

export default Category;
