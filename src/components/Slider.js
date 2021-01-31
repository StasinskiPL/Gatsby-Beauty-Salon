import { Link } from "gatsby";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Slider = ({ openSlider, setOpenSlider }) => {
  return (
    <aside className={`slider ${openSlider ? "active" : ""}`}>
      <div className="slider-inner">
        <div className="slider-header">
          <button
            onClick={() => setOpenSlider(false)}
            aria-label="close slider"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="slider-links">
          <li className="slider-link">
            <Link to="/cennik">Cennik</Link>
          </li>
          <li className="slider-link">
            <Link to="/galeria">Galeria</Link>
          </li>
          <li className="slider-link">
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Slider;
