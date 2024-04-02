import logo from "../../assets/logo-fempulse.png";
import logoutIcon from "../../assets/door-closed-fill.svg";
import "./Header.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import axiosInstance from "../../utils/axios-interceptor";
import { BASE_URL } from "../../utils/constant-variables";
import { Link } from "react-router-dom"; 

export function Header() {
  // Function to handle logout action
  const logout = async () => {
    // Removing token from sessionStorage
    sessionStorage.removeItem("token");
    // Redirecting to home page
    window.location.href = `${window.location.origin}`;
  };
  return (
    <div className="header">
      {window.location.pathname === "/home" && (
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip className="tooltip-custom" id="tooltip">
              Logout
            </Tooltip>
          }
        >
          <div className="header__logout-icon" onClick={() => logout()}>
            <img src={logoutIcon} alt="mood" />
          </div>
        </OverlayTrigger>
      )}
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="fempulse" />
      </Link>
    </div>
  );
}
