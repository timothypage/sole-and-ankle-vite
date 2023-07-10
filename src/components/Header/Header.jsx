import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sole&Ankle</h1>
      <nav className={styles.nav}>
        <ol>
          <li className={styles.active}>Sale</li>
          <li>New Releases</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Collections</li>
        </ol>
      </nav>
    </div>
  )
}

export default Header
