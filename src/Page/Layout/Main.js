import React from 'react';
import { Outlet } from 'react-router-dom';
import BillingTable from '../Components/BillingTable/BillingTable';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      {/* This is main page  */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;