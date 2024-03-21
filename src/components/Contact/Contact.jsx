
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <span><IoIosMail /></span>
          <a href="mailto:bhimawadnilesh04@gmail.com" target="_blank">bhimawadnilesh04@gmail.com</a>
        </li>
        <li className={styles.link}>
        <span><FaLinkedin /></span>
          <a href="https://linkedin.com/in/nilesh-bhimawad" target="_blank">linkedin.com/in/nilesh-bhimawad</a>
        </li>
        <li className={styles.link}>
        <span><FaGithub /></span>
          <a href="https://github.com/nilesh0863/" target="_blank">github.com/nilesh</a>
        </li>
      </ul>
    </footer>
  );
};

