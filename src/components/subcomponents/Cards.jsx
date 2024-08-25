import PropTypes from "prop-types";
import "./Card.css";

const Cards = ({ img, heading, about, link }) => {
  return (
    <div className="card">
      <img src={img} alt="not found" />
      <h2>{heading}</h2>
      <p>{about}</p>
      <a href={link}>
        <button>GitHub Link</button>
      </a>
    </div>
  );
};
Cards.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
export default Cards;
