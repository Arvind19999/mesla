import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

import styles from '../../assets/styles/header.module.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className={styles.navColor}>
        <Navbar color="#9ceaef" light expand="md">
          <NavbarBrand href="/" className={styles.navLink}>Mesla</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className={styles.navItem}>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={styles.navLink}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={styles.navLink}>Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user/login" className={styles.navLink}>My account</NavLink>
              </NavItem>
            </Nav>
            <NavLink href="/user/login" className={styles.navLink}>Login/Register</NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
}
