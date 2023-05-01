import "./Products.scss";
import Product from "./Product/Product";

const Products = (props) => {
  return (
    <div className="products-container">
      {!props.innerPage && (
        <div className="sec-heading"> {props.headingText}</div>
      )}
      <div className="products">
        {props?.products?.data?.map((product) => {
          const imageUrl = product.attributes.img.data[0].attributes.url;
          return (
            <Product
              imageSrc={process.env.REACT_APP_DEV_URL + imageUrl}
              title={product?.attributes?.Title}
              description={product?.attributes?.Description}
              price={product?.attributes?.Price}
              key={product.id}
              productId={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
