import React from 'react'
import {Outlet, useLocation} from "react-router-dom"
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp")
  return (
    <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main;