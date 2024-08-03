//import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Hom from './components/home';
import Desktop1 from './components/desktop1';
import Desktop2 from './components/desktop2';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Reg from './components/register';
import Log from './components/Login';
import Err from './components/error';
import ProductPage from './components/pl';
import Profilesetting from './components/profilesetting';
import Cart from './components/cart';
import Wish from './components/wishlist';
import Adm from './components/admin';
function App() {
  return (
    <>
    <div style={{background: 'linear-gradient(180deg, #FFF 2%, #75A9CF 100%)'}}>
    <BrowserRouter>
    <Nav />
       <Routes>
       <Route path="/" element={<Desktop2 />}></Route>
       <Route path="/login" element={<Log />}></Route>
       <Route path="/register" element={<Reg />}></Route> 
       <Route path="/*" element={<Err />}></Route> 
       <Route path="/product" element={<ProductPage />}></Route>  
       <Route path="/profile" element={<Profilesetting />}></Route>
       <Route path="/cart" element={<Cart />}></Route>  
       <Route path="/wishlist" element={<Wish />}></Route>  
       <Route path="/admin" element={<Adm />}></Route>
       </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
