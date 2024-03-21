import React, {useState} from "react";
import { getImageUrl } from '../../utils'
import styles from "./Navbar.module.css";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <span
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >{
          menuOpen
            ? <IoMdClose />
            : <MdOutlineMenu />
        }</span>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen} ${menuOpen && styles.temp}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
 
};

export default Navbar;
