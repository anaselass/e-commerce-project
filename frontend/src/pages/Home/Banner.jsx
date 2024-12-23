import { Link } from "react-router-dom";
import BannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content">
        <h4 className="uppercase">Up to 20% discount on</h4>
        <h1>girl's Fashion </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          mollitia dicta possimus veniam enim illo quibusdam similique. At
          fugiat magni eaque veritatis eveniet quibusdam cumque, nihil quasi
          architecto voluptatibus ducimus!
        </p>
        <button>
          <Link className="btn" to="shop">
            EXPLORE
          </Link>
        </button>
      </div>
      <div className="header__image">
        <img src={BannerImg} alt="BannerImg" />
      </div>
    </div>
  );
};

export default Banner;
