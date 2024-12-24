import { useCallback, useEffect, useState } from "react";
import productsData from "../../data/products.json";
import ProductCrards from "./ProductCrards";
import ShopFiltering from "./ShopFiltering";

const filters = {
  Categories: ["All", "accessories", "dress", "jewellery", "cosmetics"],
  Colors: ["All", "black", "red", "gold", "bleu", "beige", "silver", "green"],
  PriceRange: [
    { lable: "under $50", min: 0, max: 50 },
    { lable: "$50 to $100", min: 50, max: 100 },
    { lable: "$100 to $200", min: 100, max: 200 },
    { lable: "over $200", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filterBy, setFilterBy] = useState({
    Categories: "All",
    Colors: "All",
    PriceRange: "",
  });

  //filtring function
  const applyFilter = useCallback(() => {
    let filteredProducts = productsData;

    //filter by category
    if (filterBy.Categories !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterBy.Categories
      );
    }

    //filter by color
    if (filterBy.Colors !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterBy.Colors
      );
    }

    //filter by price range
    if (filterBy.PriceRange) {
      const [minPrice, maxPrice] = filterBy.PriceRange.split("to").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    setProducts(filteredProducts);
  }, [filterBy]);

  useEffect(() => {
    applyFilter();
  }, [filterBy, applyFilter]);

  const clearFilter = () => {
    setFilterBy({
      Categories: "All",
      Colors: "All",
      PriceRange: "",
    });
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 ">
          {/* left side */}
          <div>
            <ShopFiltering
              filters={filters}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              clearFilter={clearFilter}
            />
          </div>

          {/* right side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Availabel Products : {products.length}
            </h3>
            <ProductCrards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
