import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import CompareConcealer from './pages/CompareConcealer';
import CompareLaptop from './pages/CompareLaptop';
import CompareSunscreen from './pages/CompareSunscreen';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import HPProduct from './pages/HPProduct';
import LenovoE14Thinkpad from './pages/LenovoE14Thinkpad';
import LenovoX1Thinkpad from './pages/LenovoX1Thinkpad';
import Galaxy7Product from './pages/Galaxy7Product';
import BiodermaSunscreen from './pages/BiodermaSunscreen';
import NeutrogenaSunscreen from './pages/NeutrogenaSunscreen';
import CeraVeSunscreen from './pages/CeraVeSunscreen';
import TarteConcealer from './pages/TarteConcealer';
import MaybConcealer from './pages/MaybConcealer';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='product' element={<OurStore/>}/>
          <Route path='product/:id' element={<SingleProduct/>}/>
          <Route path='hplaptop/:id' element={<HPProduct/>}/>
          <Route path='lenovoe14/:id' element={<LenovoE14Thinkpad/>}/>
          <Route path='lenovox1/:id' element={<LenovoX1Thinkpad/>}/>
          <Route path='galaxy7/:id' element={<Galaxy7Product/>}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='blog/:id' element={<Singleblog/>}/>
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path='biodermasunsc/:id' element={<BiodermaSunscreen/>}/>
          <Route path='ceravesunsc/:id' element={<CeraVeSunscreen/>}/>
          <Route path='tarteconc/:id' element={<TarteConcealer/>}/>
          <Route path='maybconc/:id' element={<MaybConcealer/>}/>
          <Route path='neutrogenasunsc/:id' element={<NeutrogenaSunscreen/>}/>
          <Route path='compare-product' element={<CompareProduct/>}/>
          <Route path='compare-concealer/:type' element={<CompareConcealer/>}/>
          <Route path='compare-laptop' element={<CompareLaptop/>}/>
          <Route path='compare-concealer' element={<CompareSunscreen/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='forgot-password' element={<Forgotpassword/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='reset-password' element={<Resetpassword/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='refund-policy' element={<RefundPolicy/>}/>
          <Route path='shipping-policy' element={<ShippingPolicy/>}/>
          <Route path='term-conditions' element={<TermAndConditions/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
