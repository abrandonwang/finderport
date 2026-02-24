import styles from './FinderWindow.module.css'
import TitleBar from '../TitleBar/TitleBar'
import Sidebar from '../Sidebar/Sidebar'
import ContentArea from '../ContentArea/ContentArea'
import {useState} from 'react'
import fileSystem from '../../data/fileSystem.js'

function getFolderAtPath(path) {
  let current = fileSystem;
  for (let i = 1; i< path.length; i++) {
    current = current.children.find(child => child.id === path[i])
  }
  return current;
}

function FinderWindow() {
  const [currentPath, setCurrentPath] = useState(["root"])
  const [selectedItem, setSelectedItem] = useState(null)

  function handleSidebarClick(folderId) {
    setCurrentPath(["root", folderId])
    setSelectedItem(null)
  }

  function handleFolderOpen(folderId) {
    setCurrentPath([...currentPath, folderId])
    setSelectedItem(null)
  }

  function handleBack() {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1))
      setSelectedItem(null)
    }
  }

  function handleSelect(itemID) {
    setSelectedItem(itemID)
  }

  const currentFolder = getFolderAtPath(currentPath)
  return (
    <div className={styles.container}>
      <TitleBar
        title={currentFolder.name}
        onBack={handleBack}
        canGoBack={currentPath.length > 1}
      />
      <div className={styles.body}>
        <Sidebar
          activeSidebar={currentPath[1] || null}
          onSidebarClick={handleSidebarClick}
        />
        <ContentArea
          currentPath={currentPath}
          currentFolder={currentFolder}
          selectedItem={selectedItem}
          onSelect={handleSelect}
          onFolderOpen={handleFolderOpen}
          fileSystem={fileSystem}
        />
      </div>
    </div>
  )
}

export default FinderWindow