import React from 'react'
import Title from './Title'
import { tours } from '../data'
import styles from './Tour.module.css'

const Tours = () => {
  return (
    <section className={styles.section} id="tours">
      <Title title="featured" subTitle="tours" />

      <div className={`${styles.section_center} ${styles.featured_center}`}>
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour
          return (
            <article className={styles.tour_card} key={id}>
              <div className={styles.tour_img_container}>
                <img src={image} className={styles.tour_img} alt="" />
                <p className={styles.tour_date}>{date}</p>
              </div>
              <div className={styles.tour_info}>
                <div className={styles.tour_title}>
                  <h4>{title}</h4>
                </div>
                <p className={styles.tour_info_desc}>{info}</p>
                <div className={styles.tour_footer}>
                  <div>
                    <i className="fas fa-map"></i>
                    <div className={styles.tour_footer_loc}>{location}</div>
                  </div>
                  <div>{duration} Days</div>
                  <div>From ${cost}</div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
