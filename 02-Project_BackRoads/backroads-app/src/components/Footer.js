import React from 'react'
import { pageLinks, socialLinks } from '../data'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.section_footer}>
      <ul className={styles.footer_links}>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={styles.footer_link}>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className={styles.footer_icons}>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                className={styles.footer_icon}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className={styles.copyright}>
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
