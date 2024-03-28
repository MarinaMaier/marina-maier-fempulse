import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BASE_URL = "http://localhost:8080";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [hasSubmit, setHasSubmit] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmit(true);
    const newUser = {
      email,
      password
    };
     // Check if any field is empty
  if (!email || !password || !confirmPassword) {
    console.error("Please fill out all fields");
    return;
  }

  // Check if email is valid
  if (!validateEmail(email)) {
    console.error("Please provide a valid email");
    return;
  }

  // Check if password is valid
  if (!validatePassword(password)) {
    console.error("Please provide a valid password");
    return;
  }

  // Check if confirm password matches password
  if (!validateConfirmPassword(confirmPassword, password)) {
    console.error("Passwords do not match");
    return;
  }
    setIsPending(true);

    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then(setIsPending(false));

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        console.error("Failed to sign up:", response.statusText);
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error("Error adding new user:", error);
      setSubmitSuccess(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {

    if (!/[a-zA-Z]/.test(password)) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }
    return true;
  };
  const validateConfirmPassword = (confirmPassword, password) => {
    return confirmPassword === password;
  };

  return (
    <div className="form">
      <form className="form__welcome" onSubmit={handleSubmit}>
        <h2 className="form__header">Create an Account</h2>
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
        <div className="form__group">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {submitSuccess && <div>Sign up successful!</div>}
        {isPending && <div>Submitting form...</div>}
        {hasSubmit && !submitSuccess && !isPending && (
          <div>Error submitting form.</div>
        )}
        <button className="form__btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
