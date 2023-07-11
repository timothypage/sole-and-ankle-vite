import { useState } from 'react'
import classnames from 'classnames'

import styles from './ShoeType.module.css'

const ShoeType = ({ className }) => {
  const [activeType, setActiveType] = useState('Running')
  const types = [
    'Lifestyle',
    'Jordan',
    'Running',
    'Basketball',
    'Training & Gym',
    'Football',
    'Skateboarding',
    'American Football',
    'Baseball',
    'Golf',
    'Tennis',
    'Athletics',
    'Walking'
  ]

  return (
    <div className={classnames(className, styles.shoeType)}>
      {types.map(type => (
        <p
          key={type}
          className={type === activeType ? styles.active : undefined}
          onClick={() => setActiveType(type)}
        >
          {type}
        </p>
      ))}
    </div>
  )
}

export default ShoeType
