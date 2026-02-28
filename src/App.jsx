import { useState } from 'react'
import styles from './App.module.css'
import FinderWindow from './components/FinderWindow/FinderWindow'

function App() {
  const [finderOpen, setFinderOpen] = useState(false)

  return (
    <div className={styles.page}>

      <div className={styles.floatingName}>Brandon Wang</div>

      <div className={styles.floatingLinks}>
        <a href="https://github.com/abrandonwang" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/abrandonwang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className={styles.hero}>
        <h1 className={styles.title}>Brandon Wang</h1>
        <p className={styles.subtitle}>CS student [at] Northwestern.</p>
        <button className={styles.cta} onClick={() => setFinderOpen(true)}>
          Explore my work →
        </button>
      </div>

      {finderOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBackdrop} onClick={() => setFinderOpen(false)} />
          <div className={styles.orbContainer}>
            <div className={`${styles.orb} ${styles.orb1}`}></div>
            <div className={`${styles.orb} ${styles.orb2}`}></div>
            <div className={`${styles.orb} ${styles.orb3}`}></div>
            <div className={`${styles.orb} ${styles.orb4}`}></div>
            <div className={`${styles.orb} ${styles.orb5}`}></div>
          </div>
          <div className={styles.finderContainer}>
            <FinderWindow />
          </div>
        </div>
      )}
    </div>
  )
}

export default App