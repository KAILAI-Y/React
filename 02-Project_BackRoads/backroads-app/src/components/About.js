import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'
import styles from '../components/About.module.css'

const About = () => {
  return (
    <section className={styles.section} id="about">
      <Title title="about" subTitle="us" />
      <div className={`${styles.section_center} ${styles.about_center}`}>
        <div className={styles.about_img}>
          <img
            src={aboutImg}
            className={styles.about_photo}
            alt="awesome beach"
          />
        </div>
        <article className={styles.about_info}>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className={styles.btn}>
            READ MORE
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
