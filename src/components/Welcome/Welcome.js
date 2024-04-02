import "./Welcome.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__header">Welcome to FemPulse</h2>
      <div className="welcome__container">
        <div className="welcome__btn-container">
          <Link to="/signup" className="welcome__link">
            <button className="welcome__btn-signup">Sign Up</button>
          </Link>
          <Link to="/login" className="welcome__link">
            <button className="welcome__btn-login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
