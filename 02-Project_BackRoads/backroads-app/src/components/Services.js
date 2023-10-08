import React from 'react'
import Title from './Title'
import { services } from '../data'
import styles from './Service.module.css'

const Services = () => {
  return (
    <section className={`${styles.section} ${styles.services}`} id="services">
      <Title title="our" subTitle="services" />

      <div className={`${styles.section_center} ${styles.services_center}`}>
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article className={styles.service} key={id}>
              <span className={styles.service_icon}>
                <i className={icon}></i>
              </span>
              <div className={styles.service_info}>
                <h4 className={styles.service_title}>{title}</h4>
                <p className={styles.service_text}>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
