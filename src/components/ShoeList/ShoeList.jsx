import classnames from 'classnames'
import ShoeItem from '/src/components/ShoeItem'

import shoes from '/src/data/shoes'
import styles from './ShoeList.module.css'

const ShoeList = ({ className }) => {
  return (
    <div className={classnames(className, styles.shoeList)}>
      {shoes.map(shoe => (
        <ShoeItem key={shoe.name} className={styles.shoeItem} {...shoe} />
      ))}
    </div>
  )
}

export default ShoeList
