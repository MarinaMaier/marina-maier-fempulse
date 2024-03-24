import logo from "../../assets/logo-fempulse.png";
import "./Header.scss";

export function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="fempulse" />
        </div>
    )
}