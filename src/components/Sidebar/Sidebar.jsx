import styles from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3 className={styles.heading}>Favorites</h3>
        <nav className={styles.nav}>
          <button className={styles.sidebarItem}>
            <span className="material-symbols-outlined">person</span>
            <span>About Me</span>
          </button>
          <button className={`${styles.sidebarItem} ${styles.active}`}>
            <span className="material-symbols-outlined">folder_open</span>
            <span>Projects</span>
          </button>
          <button className={styles.sidebarItem}>
            <span className="material-symbols-outlined">work</span>
            <span>Experience</span>
          </button>
          <button className={styles.sidebarItem}>
            <span className="material-symbols-outlined">mail</span>
            <span>Contact</span>
          </button>
        </nav>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Locations</h3>
        <nav className={styles.nav}>
          <a className={styles.sidebarItem} href="#">
            <div className={`${styles.locationIcon} ${styles.iconGitHub}`}>
              <span className="material-symbols-outlined">code</span>
            </div>
            <span>GitHub</span>
          </a>
          <a className={styles.sidebarItem} href="#">
            <div className={`${styles.locationIcon} ${styles.iconLinkedIn}`}>
              <span className="material-symbols-outlined">work_outline</span>
            </div>
            <span>LinkedIn</span>
          </a>
          <a className={styles.sidebarItem} href="#">
            <div className={`${styles.locationIcon} ${styles.iconEmail}`}>
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <span>Email</span>
          </a>
        </nav>
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Tags</h3>
        <nav className={styles.nav}>
          <button className={styles.sidebarItem}>
            <div className={`${styles.tagDot} ${styles.dotReact}`}></div>
            <span>React</span>
          </button>
          <button className={styles.sidebarItem}>
            <div className={`${styles.tagDot} ${styles.dotJS}`}></div>
            <span>JavaScript</span>
          </button>
          <button className={styles.sidebarItem}>
            <div className={`${styles.tagDot} ${styles.dotPython}`}></div>
            <span>Python</span>
          </button>
          <button className={styles.sidebarItem}>
            <div className={`${styles.tagDot} ${styles.dotCSS}`}></div>
            <span>CSS</span>
          </button>
        </nav>
      </section>
    </div>
  )
}

export default Sidebar