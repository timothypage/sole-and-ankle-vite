import classnames from 'classnames'

import styles from './ShoeItem.module.css'

const ShoeItem = ({
  name,
  colors,
  price,
  salePrice,
  isNew,
  image,
  className
}) => {
  return (
    <div className={classnames(className, styles.shoeItem)}>
      <div className={styles.tags}>
        <p>Just Released!</p>
        <p className={styles.sale}>Sale</p>
      </div>
      <img src={image} />
      <div className={styles.namePrice}>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <div className={styles.namePrice}>
        <p className={styles.colors}>{`${colors} ${
          colors === 1 ? 'Color' : 'Colors'
        }`}</p>
        <p className={styles.salePrice}>${salePrice}</p>
      </div>
    </div>
  )
}

export default ShoeItem
