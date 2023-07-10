import { preheader, otherText } from "./PreHeader.module.css";

const PreHeader = () => (
  <div className={preheader}>
    <p>Free shipping on domestic orders over $75!</p>
    <p className={otherText}>Search</p>
    <p>Help</p>
    <div className="cart">Cart</div> 
  </div>
)


export default PreHeader;
