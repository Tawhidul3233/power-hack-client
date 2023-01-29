import React from 'react';

const Navbar = () => {
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
                                             Paid Total: 00
                                        </p>
                                   </div>
                                   <div className="sm:flex sm:gap-4">
                                        <a
                                             className="rounded-md bg-green-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                                             href="/"
                                        >
                                             Login
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>

          </div>
     );
};

export default Navbar;