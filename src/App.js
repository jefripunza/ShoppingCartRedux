import React, { useEffect } from 'react';

// Style
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/App.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Section
import ShoppingCart from './section/ShoppingCart';

export default function App() {
  useEffect(() => {
    if (localStorage.getItem("wishlist") === null) {
      localStorage.setItem("wishlist", JSON.stringify([]))
    }
  }, [])
  return (
    <>
      <ShoppingCart />
      <ToastContainer />
    </>
  );
}
