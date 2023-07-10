import { Search } from "react-feather";

import styles from "./SearchInput.module.css"

const SearchInput = ({ label, ...delegated }) => (
  <label className={styles.label}>
    <p className="visually-hidden">Search</p>
    <input className={styles.input} placeholder="Search..." {...delegated} />
    <Search className={styles.icon} size={16} />
  </label>
)

export default SearchInput
