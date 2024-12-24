import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ProductCrards from "../shop/ProductCrards";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filtredProducts, setFiltredProducts] = useState([]);

  useEffect(() => {
    const filtred = products.filter(
      (product) => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    setFiltredProducts(filtred);
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(categoryName);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header">{categoryName}</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        </p>
      </section>

      {/* products card */}
      <div className="section__container">
        <ProductCrards products={filtredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
