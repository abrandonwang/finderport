import styles from './ContentArea.module.css'

function ContentArea({ currentPath, currentFolder, selectedItem, onSelect, onFolderOpen, fileSystem }) {
  return (
    <div className={styles.container}>
      <div className={styles.breadCrumb}>
        <span className="material-symbols-outlined">desktop_mac</span>
        <span>BrandonWang</span>
        {currentPath.length > 1 && (
          <>
            <span className={`material-symbols-outlined ${styles.breadCrumbArrow}`}>arrow_forward_ios</span>
            <div className={styles.pill}>
              <span className={`material-symbols-outlined ${styles.pillIcon}`}>folder</span>
              <span>{currentFolder.name}</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.columnHeaders}>
        <div>Name</div>
        <div>Tech Stack</div>
        <div>Date Modified</div>
        <div>Kind</div>
      </div>
      <div className={styles.fileList}>
        {currentFolder.children.map(item => (
          <div
            key={item.id}
            className={`${styles.row} ${selectedItem === item.id ? styles.selected : ''}`}
            onClick={() => onSelect(item.id)}
            onDoubleClick={() => item.type === 'folder' ? onFolderOpen(item.id) : null}>
            <div className={styles.nameCell}>
              <span className="material-symbols-outlined">{item.icon || 'folder'}</span>
              <span>{item.name}</span>
            </div>
            <div>{item.meta?.techStack || item.meta?.size || '--'}</div>
            <div>{item.meta?.modified || '--'}</div>
            <div>{item.meta?.kind || item.type}</div>
          </div>
        ))}
        <div className={styles.emptyRow}></div>
        <div className={styles.emptyRow}></div>
        <div className={styles.emptyRow}></div>
      </div>
      <div className={styles.statusBar}>
        <span>{currentFolder.children.length} items{selectedItem ? ', 1 selected' : ''}</span>
        <span>☕ fueled by coffee</span>
      </div>
    </div>
  )
}

export default ContentArea