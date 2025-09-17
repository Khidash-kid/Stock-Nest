import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
// import  SignIn from './landing_page/signup/SignIn';
import  Login from './landing_page/signup/Login';
import  PricingPage from './landing_page/pricing/PricingPage';
import  ProductsPage from './landing_page/products/ProductsPage';
import  SupportPage from './landing_page/support/SuppportPage';
import  AboutPage from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SignIn from './landing_page/signup/SignIn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/Pricing' element={<PricingPage />} />
      <Route path='/Products' element={<ProductsPage />} />
      <Route path='/Support' element={<SupportPage />} />
      <Route path='/About' element={<AboutPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


