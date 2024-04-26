import "./Welcome.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__header">Welcome to FemPulse</h2>
      <p className="welcome__text">FemPulse is your go-to mood-tracking companion designed to enhance your daily effectiveness.</p>
      <p className="welcome__text">Simply log in to the app to start your journey, or sign up if you're a new user, 
        and begin harnessing the power of mood awareness for a more productive and balanced lifestyle.</p>
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
