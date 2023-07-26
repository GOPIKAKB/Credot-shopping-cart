import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Category from './Components/Category';

import datas from './Components/Data'
import { createContext, useState } from 'react';
import ProductList from './Components/Product/ProductList';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

export const newContext = createContext()

function App() {
  const [data, setData] = useState(datas)
  const [cart,setCart]= useState([])
  return (
    <div className="App">
      
      <newContext.Provider value={{data, setData,cart,setCart}}>
        <Header />
        <Banner />
        <Category />
        <ProductList />
        <Footer/>
      </newContext.Provider>
    </div>
  );
}

export default App;
