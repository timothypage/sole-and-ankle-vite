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
        {isNew ? (<p>Just Released!</p>) : null}
        {salePrice ? (<p className={styles.sale}>Sale</p>) : null}
      </div>
      <img src={image} />
      <div className={styles.namePrice}>
        <p>{name}</p>
        <p className={salePrice ? styles.oldPrice : undefined}>${price}</p>
      </div>
      <div className={styles.namePrice}>
        <p className={styles.colors}>{`${colors} ${
          colors === 1 ? 'Color' : 'Colors'
        }`}</p>
        {salePrice ? (<p className={styles.salePrice}>${salePrice}</p>) : null}
      </div>
    </div>
  )
}

export default ShoeItem
