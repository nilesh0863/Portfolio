import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/hero/Nilesh Bhimawad resume.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nilesh</h1>
        <p className={styles.description}>
        I am a final-year computer science student with expertise in frontend development,  I am actively seeking opportunities to apply my skills and knowledge. Feel free to reach out if you'd like to learn more!
        </p>
        <div className={styles.btnDiv}>
          <a
            href="mailto:bhimawadnilesh04@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a
            href={resume}
            download="Nilesh_resume.pdf"
            className={styles.downloadBtn}
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/temp1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
