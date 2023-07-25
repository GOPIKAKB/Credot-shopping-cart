import React, { useContext } from 'react'
import { newContext } from '../../App'
import Cards from './Card'

function ProductList() {

  const { data, cart, setCart } = useContext(newContext)
  
  const shoeLst = data.filter(item => item.name === 'shoes')
  const backPackList = data.filter(item => item.name === 'bag')

  const addItem = (item) => {
    const founditem = Boolean(cart.find(i => item.title === i.title))
    if (founditem) {
      setCart(pre =>
        pre.map(data => {
          if (data.title === item.title) {
            return { ...data, count: data.count + 1 }
          }
          return data
        })
      )

    }
    else {
      const newItem = { ...item, count: 1 }
      setCart((pre) => [...pre, newItem])
    }
  }

  return (
    <div style={{display:'block',margin:'30px auto',width:'80%'}}>
      <Cards data={shoeLst} category='Shoes' addItem={addItem} />
      <Cards data={backPackList} category='Back Packs' addItem={addItem} />
    </div>
  )
}

export default ProductList
