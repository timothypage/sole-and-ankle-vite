import Sort from '/src/components/Sort'

import styles from './ShoeNav.module.css'

const ShoeNav = () => (
  <div className={styles.shoeNav}>
    <div className={styles.breadcrumbs}>
      <ol>
        <li>Home</li>
        <li>Sale</li>
        <li>Shoes</li>
      </ol>
    </div>
    <h2>Running</h2>
    <Sort>
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
    </Sort>
  </div>
)

export default ShoeNav
