import { useState } from "react";
import ProductCrards from "./ProductCrards";
import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <section className="section__container product__card__content">
      <h4 className="section__header">Trending Products</h4>
      <p className="section__subheader mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero
        repudiandae at labore nemo magni tempore, provident praesentium placeat!
        Quam in facilis ipsam cum ea, animi saepe dicta asperiores. Distinctio!
      </p>

      {/* Product Card */}
      <ProductCrards products={products} />
    </section>
  );
};

export default TrendingProducts;
