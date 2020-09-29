import React from 'react'
import RegisterSvg from '../../assets/images/finalregister.svg'
import "../../assets/styles/user.scss"
import Footer from '../partials/Footer';
import Header from '../partials/Header';

export default function Register() {
    return (
      <>
      <Header />
        <div className="base-container m-2">
          <div className="shadow p-4">
            <div className="header text-center">Register</div>
            <div className="content">
              <div className="image">
                <img src={RegisterSvg} alt="Register" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type your password here"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </div>
                  <div className="col-12">
                    <p className="mt-2 text-right">
                      <a href="/user/login"> Back to Login? </a>
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
