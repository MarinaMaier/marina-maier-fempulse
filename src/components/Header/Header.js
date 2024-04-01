import logo from "../../assets/logo-fempulse.png";
import logoutIcon from "../../assets/door-closed-fill.svg";
import "./Header.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export function Header() {
  const logout = () => {};
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="fempulse" />
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
    </div>
  );
}
