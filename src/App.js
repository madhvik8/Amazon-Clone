 import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Header/>
       <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
            </Routes>
</BrowserRouter>
</div>

  );
}

export default App;
