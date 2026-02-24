import styles from './FinderWindow.module.css'
import TitleBar from '../TitleBar/TitleBar'
import Sidebar from '../Sidebar/Sidebar'
import ContentArea from '../ContentArea/ContentArea'

function FinderWindow() {
  return (
    <div className={styles.container}>
      <TitleBar />
      <div className = {styles.body}>
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  )
}

export default FinderWindow