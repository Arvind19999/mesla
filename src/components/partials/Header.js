import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
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
                <NavLink href="/components/">Home</NavLink>
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
                <NavLink href="#" className={styles.navLink}>My account</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className={styles.navLink}>Login/Register</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}
