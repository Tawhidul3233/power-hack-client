import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     // create navbar using tailwind css nad javascript
     const [bills, setBills] = useState([])
     useEffect(() => {
          fetch('https://power-hack-server-green.vercel.app/api/billing-list')
               .then(res => res.json())
               .then(data => setBills(data))
     }, [bills])

     // Total paid amoutn sum
     const sum = bills.reduce((total, current) => total + parseInt(current.amount), 0);

     return (
          <div className=''>
               <header aria-label="Site Header" className="bg-white">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                         <div className="flex h-16 items-center justify-between">
                              <div className="md:flex md:items-center md:gap-12">
                                   <a className="block text-teal-600" href="/">
                                        <span className="sr-only">Home</span>
                                        <img className='h-14' src="https://i.ibb.co/NYD9Myq/logo1.png" alt="" />
                                   </a>
                              </div>
                              <div className="flex items-center gap-4">
                                   <div className="sm:flex sm:gap-4">
                                        <p
                                             className="rounded-md px-5 py-2.5 text-sm font-medium shadow"
                                             href="/"
                                        >
                                             Paid Total: {sum}$
                                        </p>
                                   </div>
                                   <div className="sm:flex sm:gap-4">
                                        <Link
                                             className="rounded-md bg-green-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                                             to="/login"
                                        >
                                             Login
                                        </Link>
                                   </div>
                                   <div className="sm:flex sm:gap-4">
                                        <Link
                                             className="rounded-md bg-green-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                                             to="/header"
                                        >
                                             Table
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>

          </div>
     );
};

export default Navbar;