import React from 'react'
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h1 className={styles.title}>SKILLS</h1>
        <div className={styles.skillContainer} >
            {
                skills.map((skill, index) =>{
                    return (<div id={index} className={styles.skill}> 
                        <div className={styles.imgDiv} ><img src={getImageUrl(skill.imageSrc)} alt="" /></div>
                        <h2>{skill.title}</h2>
                    </div>);
                })
            }
        </div>
    </section>
  )
}
