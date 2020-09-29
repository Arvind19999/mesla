import React from 'react'
import styles from '../../assets/styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faStackOverflow, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight  } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
      <footer>
        <div className={`container-fluid ${styles.footer} text-center`}>
          <div className="row">
            <div className="col-md-4 p-4">
              <div className="footer-header">
                <h2>Mesla</h2>
              </div>
              <div className="footer-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Explicabo doloremque ut, quaerat neque adipisci corporis hic
                  voluptatibus qui cum debitis odio ullam voluptas assumenda,
                  iure recusandae error dolore minus animi.
                </p>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="footer-header">
                <h2>Quick Links</h2>
              </div>
              <div className="footer-body">
                <ul className={styles.listType}>
                  <div className="row">
                      <div className="col-md-2"><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                      <div className="col-md-10"><li>Home</li></div>
                  </div>
                  <div className="row">
                      <div className="col-md-2"><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                      <div className="col-md-10"><li>About Us</li></div>
                  </div>
                  <div className="row">
                      <div className="col-md-2"><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                      <div className="col-md-10"><li>My Account</li></div>
                  </div>
                  <div className="row">
                      <div className="col-md-2"><FontAwesomeIcon icon={faAngleDoubleRight} /></div>
                      <div className="col-md-10"><li>Jobs</li></div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <div className="footer-header">
                <h2>Follow Us</h2>
              </div>
              <div className="footer-body">
                <ul className={`${styles.listType} ${styles.socialIcons}`}>
                  <li className="mr-3">
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li className="mr-3">
                    <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li className="mr-3">
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                  <li className="mr-3">
                    <FontAwesomeIcon icon={faStackOverflow} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-12">
                  <hr style={{backgroundColor: 'white'}}/>
                  <p>Copyright &copy; 2020. Mesla Teams. All Rights Reserved.</p>
              </div>
          </div>
        </div>
      </footer>
    );
}
