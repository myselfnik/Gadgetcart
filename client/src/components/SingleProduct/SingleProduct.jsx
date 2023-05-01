import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*`);
  let filteredData;

  if (data && data.data) {
    filteredData = data.data.find((el) => el.id == id);
  }

  const imageUrl = filteredData?.attributes?.img?.data[0]?.attributes?.url;

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const decreaseCounter = () => {
    if (selectedQuantity == 1) return;
    /*let temp = selectedQuantity;
    temp--;
    setSelectedQuantity(temp);*/
    setSelectedQuantity((prevState) => prevState - 1);
  };

  const increaseCounter = () => {
    /*let temp = selectedQuantity;
    temp++;
    setSelectedQuantity(temp);
    */
    setSelectedQuantity((prevState) => prevState + 1);
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={process.env.REACT_APP_DEV_URL + imageUrl} alt="" />
          </div>
          <div className="right">
            <span className="name">{filteredData?.attributes.Title}</span>
            <span className="price">
              &#8377; {filteredData?.attributes.Price}
            </span>
            <span className="desc">{filteredData?.attributes.Description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decreaseCounter}>-</span>
                <span>{selectedQuantity}</span>
                <span onClick={increaseCounter}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: <span>HeadPhones</span>
              </span>
              <span className="text-bold">
                Share:{" "}
                <span className="social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaPinterest />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts catId={filteredData?.attributes?.catid} />
      </div>
    </div>
  );
};

export default SingleProduct;
