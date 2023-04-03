import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Product from './components/Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} initial />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
