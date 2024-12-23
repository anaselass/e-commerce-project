import { useState } from "react";
import ProductCrards from "./ProductCrards";
import products from "../../data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const handleShowMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <section className="section__container product__card__content">
      <h4 className="section__header">Trending Products</h4>
      <p className="section__subheader mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vero
        repudiandae at labore nemo
      </p>

      {/* Product Card */}
      <div className="mt-12">
        <ProductCrards products={products.slice(0, visibleProducts)} />
      </div>

      {/* Show More Button */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn btn-primary" onClick={handleShowMoreProducts}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
