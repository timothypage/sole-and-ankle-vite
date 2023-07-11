import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'

import styles from './Sort.module.css'

const Sort = ({ label, value, children, ...delegated }) => {
  const [selectedID, setSelectedID] = useState('newest')
  const childArray = React.Children.toArray(children)
  const selectedChild = childArray.find(child => child.props.value === selectedID)

  const displayedValue = selectedChild.props.children

  return (
    <label className={styles.sort}>
      <span className={styles.visibleLabel}>{label || 'Sort'}</span>

      <div className={styles.selectWrapper}>
        <select className={styles.nativeSelect} onChange={e => setSelectedID(e.target.value)} {...delegated}>{children}</select>
        <span className={styles.display}>
          {displayedValue}
          <ChevronDown className={styles.chevronIcon} size={24} strokeWidth={1.5} />
        </span>
      </div>
    </label>
  )
}

export default Sort
