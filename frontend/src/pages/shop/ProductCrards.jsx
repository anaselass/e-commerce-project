import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingStars from "../../components/RatingStars";

const ProductCrards = ({ products }) => {
  {
    console.log(products);
  }
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index}>
          <div className="relative">
            {/* product image */}
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt="product image"
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>

            {/* product shop */}
            <div>
              <button className="absolute top-2 right-2 bg-primary hover:bg-primary-dark text-white px-2 py-1 rounded-full">
                <i className="ri-shopping-cart-line"></i>
              </button>
            </div>

            {/* product details */}
            <div className="product__card__content">
              <h4>{product.name}</h4>
              <p>
                {product.price}{" "}
                {product.oldPrice ? <s>{product.oldPrice}</s> : null}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <RatingStars rating={product.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
ProductCrards.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductCrards;
