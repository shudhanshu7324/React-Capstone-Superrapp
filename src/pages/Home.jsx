import React from "react";
import "../Css/Home.css";

const Home = () => {
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
            <form>
              <input type="text" placeholder="Name" />
              <span className="error"></span>
              <input type="text" placeholder="Username" />
              <span className="error"></span>

              <input type="email" placeholder="Email" />
              <span className="error"></span>

              <input type="text" placeholder="Mobile" />
              <span className="error"></span>

              <span className="check">
                <input type="checkbox" name="check-box" />
                <label htmlFor="check-box">
                  Share my registration data with Superapp
                </label>
              </span>
              <span className="error"></span>

              <button className="sign-up-btn">SIGN UP</button>
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
