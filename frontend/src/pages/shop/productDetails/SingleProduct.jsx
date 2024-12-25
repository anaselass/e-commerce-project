import { Link } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";

const SingleProduct = () => {
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header">Shop Page</h2>
        <div className="section__subheader space-x-2">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <i className="ri-arrow-right-wide-line"></i>
          <span>
            <Link to={"/shop"}>Shop</Link>
          </span>
          <i className="ri-arrow-right-wide-line"></i>
          <span>Product Details</span>
        </div>
      </section>

      <section className="section__container mt-12">
        <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">product name</h3>
            <p className="text-xl text-primary mb-4">
              $100 <s>$130</s>
            </p>
            <p className="text-gray-400 mb-4">this is additional decreption</p>

            {/* additional product info */}
            <div>
              <p>
                <strong>Category:</strong> accessories
              </p>
              <p>
                <strong>Color:</strong> red
              </p>
              <div className="flex items-center gap-1">
                <strong>Rating:</strong> <RatingStars rating={4} />
              </div>

              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* display reviews */}
    </>
  );
};

export default SingleProduct;
