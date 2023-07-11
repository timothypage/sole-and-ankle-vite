import classnames from 'classnames'
import ShoeItem from '/src/components/ShoeItem'

import styles from "./ShoeList.module.css"

const ShoeList = ({ className }) => {
  const shoes = [
    {
      name: 'Boom Goes the Dynamite', 
      type: 'Basketball', 
      price: 165,
      isNew: true,
      colors: 2,
      image: 'basketball-boom-goes-the-dynamite.png' 
    },
    {
      name: 'El Tigre',
      type: 'basketball',
      price: 165,
      salePrice: 145,
      colors: 1,
      image: 'basketball-el-tigre.png'
    },
    {
      name: 'Emperor',
      type: 'basketball',
      price: 165,
      isNew: true,
      colors: 4,
      image: 'basketball-emperor.png'
    },
    {
      name: 'Jicama',
      type: 'basketball',
      price: 165,
      colors: 2,
      image: 'basketball-jicama.png'
    }
  ];

  return (
    <div className={classnames(className)}>
      {shoes.map(shoe => (
        <ShoeItem key={shoe.name} {...shoe} />
      ))
      }
    </div>
  )
}

export default ShoeList
