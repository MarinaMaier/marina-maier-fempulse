import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogIn.scss";
import axios from "axios";
import { BASE_URL } from "../../utils/constant-variables";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      sessionStorage.token = response.data.token
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="form">
      <form className="form__welcome" onSubmit={handleSubmit}>
        <h2 className="form__header">Welcome to FemPulse</h2>
        <div className="form__group">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="form__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
