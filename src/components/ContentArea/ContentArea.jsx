import styles from './ContentArea.module.css'

function ContentArea() {
  return (
    <div className={styles.container}>
      <div className = {styles.breadCrumb}>
        <span className = "material-symbols-outlined">desktop_mac</span>
        <span>BrandonWang</span>
        <span className = "material-symbols-outlined">arrow_forward_ios</span>
        <div className = {styles.pill}>
          <span className = "material-symbols-outlined">folder</span>
          <span>Projects</span>
        </div>
      </div>
      <div className = {styles.columnHeaders}>
      </div>
      <div className = {styles.fileList}>
      </div>
      <div className = {styles.statusBar}>
      </div>
    </div>
  )
}

export default ContentArea