import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

import { useEffect, useContext } from "react";

const Home = () => {
  const { catgroups, setCatgroups, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCatagories();
  }, []);
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  const getCatagories = () => {
    fetchDataFromApi("/api/catgroups?populate=*").then((res) => {
      setCatgroups(res);
    });
  };
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category catgroups={catgroups} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
