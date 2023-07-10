import { ShoppingBag } from "react-feather";
import SearchInput from "/src/components/SearchInput"

import styles from "./PreHeader.module.css";

const PreHeader = () => (
  <div className={styles.preheader}>
    <p>Free shipping on domestic orders over $75!</p>
    <SearchInput />
    <p>Help</p>
    <ShoppingBag className={styles.lightGreyText} /> 
  </div>
)


export default PreHeader;
