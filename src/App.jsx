import styles from './App.module.css'
import FinderWindow from './components/FinderWindow/FinderWindow'

function App() {
  return (
    <div className={styles.desktop}>
      <div className={styles.backgroundGlow}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
        <div className={`${styles.orb} ${styles.orb4}`}></div>
        <div className={`${styles.orb} ${styles.orb5}`}></div>
      </div>
      <FinderWindow />
    </div>
  )
}

export default App