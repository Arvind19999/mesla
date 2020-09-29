import React from 'react'
import Loginsvg from '../../assets/images/finalLogin.svg'
import "../../assets/styles/user.scss"
import Footer from '../partials/Footer';
import Header from '../partials/Header';

export default function Login() {
    return (
      <>
      <Header />
         <div className="base-container m-2">
        <div className="shadow p-4">
          <div className="header text-center">Login</div>
          <div className="content">
            <div className="image">
              <img src={Loginsvg} alt="Login" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type your password here"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <button type="submit" className="btn">
                    Login
                  </button>
                </div>
                <div className="col-12">
                  <p className="mt-2 text-right">
                    <a href="/user/register"> Create New Account? </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
}
