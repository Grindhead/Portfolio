import gear from "../../../Assets/Images/gear.png";
import "./Preloader.css";

export const Preloader = () => {
  return (
    <div className="preloaderContainer">
      <img src={gear} alt="preloader" className="preloader" />
    </div>
  );
};
