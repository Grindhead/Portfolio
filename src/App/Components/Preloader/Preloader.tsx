import "./Preloader.css";
import image from "../../../Assets/svg/gear.svg";

export const Preloader = () => {
  return (
    <div className="preloaderContainer">
      <img src={image} alt="preloader" className="preloader" />
    </div>
  );
};
