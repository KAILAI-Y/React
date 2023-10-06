import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <img src={logo} className={styles.nav_logo} alt="backroads" />
          {/* <button type="button" className={styles.nav_toggle} id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button> */}
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className={styles.nav_links} id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className={styles.nav_link}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className={styles.nav_icons}>
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.nav_icon}
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
