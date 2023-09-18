import "./Preloader.css";
import gear from "../../../Assets/Images/gear.png";

export const Preloader = () => {
  return (
    <div className="preloaderContainer">
      <img src={gear} alt="preloader" className="preloader" />
    </div>
  );
};
