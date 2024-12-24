import { useState } from "react";
import products from "../../data/products.json";
import ProductCards from "../shop/ProductCrards";

const Search = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [filtredProducts, setFiltredProducts] = useState(products);

  const handleSearch = () => {
    const query = searchedQuery.toLocaleLowerCase();
    const filtred = products.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(query) ||
        product.description.toLocaleLowerCase().includes(query)
    );

    setFiltredProducts(filtred);
  };
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header">Search Products</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        </p>
      </section>

      {/* Search Form */}
      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="search for products ..."
            value={searchedQuery}
            onChange={(e) => setSearchedQuery(e.target.value)}
            className="w-full max-w-4xl p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          />
          <button onClick={handleSearch} className="btn">
            Search
          </button>
        </div>

        <div>
          <ProductCards products={filtredProducts} />
        </div>
      </section>
    </>
  );
};

export default Search;
