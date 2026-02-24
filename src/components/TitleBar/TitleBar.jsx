import styles from './TitleBar.module.css'

function TitleBar({ title, onBack, canGoBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.wrapper}>
          <span className={styles.dot1}></span>
          <span className={styles.dot2}></span>
          <span className={styles.dot3}></span>
        </div>
        <div className={styles.navigation}>
          <button onClick = {onBack ? onBack : undefined} className={`${styles.backArrow} ${!canGoBack ? styles.disabled : ''}`}>
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <button className={`${styles.forwardArrow} ${styles.disabled}`}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.viewToggle}>
          <button className={styles.viewButton}>
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button className={`${styles.viewButton} ${styles.active}`}>
            <span className="material-symbols-outlined">list</span>
          </button>
          <button className={styles.viewButton}>
            <span className="material-symbols-outlined">view_column</span>
          </button>
        </div>
        <div className={styles.toolbarActions}>
          <button className={styles.toolbarButton}>
            <span className="material-symbols-outlined">ios_share</span>
          </button>
          <button className={styles.toolbarButton}>
            <span className="material-symbols-outlined">sell</span>
          </button>
          <button className={styles.toolbarButton}>
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
        <div className={styles.searchBar}>
          <span className="material-symbols-outlined">search</span>
          <input className={styles.searchInput} placeholder="Search" type="text" />
        </div>
      </div>
    </div>
  )
}

export default TitleBar