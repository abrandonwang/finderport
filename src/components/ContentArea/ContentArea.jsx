import styles from './ContentArea.module.css'

function ContentArea() {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <span className="material-symbols-outlined">desktop_mac</span>
        <span>BrandonWang</span>
        <span className={`material-symbols-outlined ${styles.breadCrumbArrow}`}>arrow_forward_ios</span>
        <div className={styles.pill}>
          <span className={`material-symbols-outlined ${styles.pillIcon}`}>folder</span>
          <span>Projects</span>
        </div>
      </div>
      <div className={styles.columnHeaders}>
        <div>Name</div>
        <div>Tech Stack</div>
        <div>Date Modified</div>
        <div>Kind</div>
      </div>
      <div className={styles.fileList}>
        <div className={`${styles.row} ${styles.selected}`}>
          <div className={styles.nameCell}>
            <span className="material-symbols-outlined">folder</span>
            <span>Portfolio Site</span>
          </div>
          <div>React</div>
          <div>Oct 24, 2025</div>
          <div>Folder</div>
        </div>
        <div className={styles.row}>
          <div className={styles.nameCell}>
            <span className="material-symbols-outlined">folder</span>
            <span>Card Game</span>
          </div>
          <div>JS</div>
          <div>Dec 30, 2023</div>
          <div>Folder</div>
        </div>
        <div className={styles.row}>
          <div className={styles.nameCell}>
            <span className="material-symbols-outlined">folder</span>
            <span>Algorithm Visualizer</span>
          </div>
          <div>JS</div>
          <div>Sep 15, 2024</div>
          <div>Folder</div>
        </div>
        <div className={styles.row}>
          <div className={styles.nameCell}>
            <span className="material-symbols-outlined">folder</span>
            <span>Music Project</span>
          </div>
          <div>Python</div>
          <div>Mar 10, 2022</div>
          <div>Folder</div>
        </div>
        <div className={styles.row}>
          <div className={styles.nameCell}>
            <span className="material-symbols-outlined">folder</span>
            <span>Scoreboard</span>
          </div>
          <div>CSS</div>
          <div>Jun 22, 2020</div>
          <div>Folder</div>
        </div>
        <div className={styles.emptyRow}></div>
        <div className={styles.emptyRow}></div>
        <div className={styles.emptyRow}></div>
        <div className={styles.emptyRow}></div>
      </div>
      <div className={styles.statusBar}>
        <span>5 items, 1 selected</span>
        <span>120 GB available</span>
      </div>
    </div>
  )
}

export default ContentArea