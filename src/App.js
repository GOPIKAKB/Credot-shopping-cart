import './App.css';
import Header from './Components/Header';
import datas from './Components/Data'
import Cart from './Components/Cart';
import Home from './Components/Home';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const newContext = createContext()

function App() {
  const [data, setData] = useState(datas)
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <newContext.Provider value={{ data, setData, cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </newContext.Provider>
    </div>
  );
}

export default App;
