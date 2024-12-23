import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li>
            <Link
              className="hover:text-primary transition-colors duration-300"
              to="./"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary transition-colors duration-300"
              to="./Shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary transition-colors duration-300"
              to="./Pages"
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary transition-colors duration-300"
              to="./Contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="nav__logo">
          <Link to="./">
            Shopping<span>.</span>
          </Link>
        </div>

        {/* Nav Icons */}
        <div className="nav__icons">
          <span>
            <Link to="./search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button className="hover:text-primary relative">
              <i className="ri-shopping-cart-line"></i>
              <sub className="text-xs absolute -top-1 -right-3 text-white text-center bg-primary rounded-full h-4 w-4">
                0
              </sub>
            </button>
          </span>
          <span>
            <Link to="/login">
              <i className="ri-user-line"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
