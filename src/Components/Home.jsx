import React from 'react'
import Banner from './Banner'
import Category from './Category'
import ProductList from './Product/ProductList'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Banner/>
        <Category />
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Home
