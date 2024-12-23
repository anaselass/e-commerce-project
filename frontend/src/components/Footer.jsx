import instagram1 from "../assets/instagram-1.jpg";
import instagram2 from "../assets/instagram-2.jpg";
import instagram5 from "../assets/instagram-5.jpg";
import instagram6 from "../assets/instagram-6.jpg";

const Footer = () => {
  const images = [
    instagram1,
    instagram2,
    instagram2,
    instagram5,
    instagram5,
    instagram6,
  ];

  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            1234 Street Name, City Name, United States
          </p>
          <p>
            <span>
              <i className="ri-mail-line"></i>
            </span>
            anas.elassri.01@gmail.com
          </p>
          <p>
            <span>
              <i className="ri-phone-line"></i>
            </span>
            +212 6 00 00 00 00
          </p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work with Us</a>
          <a href="/">Terms & Conditions</a>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <a href="/">Help</a>
          <a href="/">Track your order</a>
          <a href="/">men</a>
          <a href="/">women</a>
        </div>

        <div className="footer_col">
          <h4>Instagram</h4>
          <div className="instagram__grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt="instagram" />
            ))}
          </div>
        </div>
      </footer>

      <div className="footer__bar">
        &copy; 2024 Ecommerce. All rights reserved
      </div>
    </>
  );
};

export default Footer;
