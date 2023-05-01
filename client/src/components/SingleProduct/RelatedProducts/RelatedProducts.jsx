import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = (props) => {
  const catId = props.catId;
  const { data } = useFetch(`/api/products?populate=*`);
  let filteredData = {
    data: [],
  };
  if (data && data.data) {
    filteredData.data = data.data.filter((el) => el.attributes.catid == catId);
  }

  return (
    <div className="-related-products">
      <Products
        headingText={"Related Products"}
        innerPage={false}
        products={filteredData}
        key={catId}
      />
    </div>
  );
};

export default RelatedProducts;
