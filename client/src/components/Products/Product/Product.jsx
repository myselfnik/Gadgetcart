import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate("/product/" + props.productId)}
    >
      <div className="thumbnail">
        <img src={props?.imageSrc} alt="" className="src" />
      </div>
      <div className="prod-details">
        <span className="name"> {props.title} </span>
        <span className="price">&#8377;{props.price}</span>
      </div>
    </div>
  );
};

export default Product;
