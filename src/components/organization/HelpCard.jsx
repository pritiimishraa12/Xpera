import {
  HiOutlinePhone,
} from "react-icons/hi2";
import "../../styles/organization/HelpCard.css";

export default function HelpCard() {
  return (
    <div className="help-card-wrapper">

      <div className="help-card-inner">

        <div className="help-card-content">

          <h3 className="help-card-title">Need Help?</h3>

          <p className="help-card-subtitle">
            Our support team is here to help you.
          </p>

          <button className="help-contact-btn">
            <HiOutlinePhone />
            <span>Contact Support</span>
          </button>

        </div>

        {/* Headphone Illustration */}
        <div className="help-card-image-wrap">
          <img
            src="https://img.icons8.com/isometric/512/000000/headphones.png"
            alt="Support Headphones"
            className="help-card-headphone-img"
          />
        </div>

      </div>

    </div>
  );
}