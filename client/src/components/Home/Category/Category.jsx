import "./Category.scss";
import { useNavigate } from "react-router-dom";

// import cat1 from "../../../assets/category/cat-1.jpg";

const Category = (props) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {props.catgroups?.data?.map((category) => {
          const imageUrl = category.attributes.img.data[0].attributes.url;
          return (
            <div
              className="category"
              key={category.id}
              onClick={() => navigate(`/category/${category?.id}`)}
            >
              <img src={process.env.REACT_APP_DEV_URL + imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
