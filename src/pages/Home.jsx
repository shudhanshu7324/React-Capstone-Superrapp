import React, { useState } from "react";
import "../Css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      alert("Form Submitted Successfully");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }
  };

  return (
    <div className="home-page">
      <div className="left">
        <div className="left-heading">Discover new things on Superapp</div>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <div className="right-head">
            <p className="right-heading">Super app</p>
            <p className="right-subheading">Create your new account</p>
          </div>
          <div className="right-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Name"
                onChange={handleInput}
              />
              <span className="error">{errors.name}</span>

              <input
                type="text"
                name="username"
                value={data.username}
                placeholder="Username"
                onChange={handleInput}
              />
              <span className="error">{errors.username}</span>

              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={handleInput}
              />
              <span className="error">{errors.email}</span>

              <input
                type="tel"
                name="mobile"
                value={data.mobile}
                placeholder="Mobile"
                onChange={handleInput}
              />
              <span className="error">{errors.mobile}</span>

              <span className="check">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={handleInput}
                />
                <label htmlFor="checkbox">
                  Share my registration data with Superapp
                </label>
              </span>
              <span className="error">{errors.checkbox}</span>

              <button type="submit" className="sign-up-btn">
                SIGN UP
              </button>
            </form>
          </div>
          <div className="right-bottom">
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <span className="green-text">Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span className="green-text">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
