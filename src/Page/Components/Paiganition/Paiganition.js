import React from 'react';
import { lime } from 'tailwindcss/colors';
import AddBillingModal from '../AddBillingModal/AddBillingModal';

const Paiganition = ({postPerPage, totalPost, paginate,number }) => {
  const pageNumber = [];
  
  for(let i = 1 ; i <= Math.ceil(totalPost / postPerPage); i++){
    pageNumber.push(i)
  }
  return (
    <div className=' '>
      <ul className='pagination flex my-10 justify-center   '>
        {
          pageNumber.map(number => (
            <li  key={number} className=' border-2  p-2 rounded-sm ml-1 text-blue-500 hover:bg-blue-500 hover:text-white '> 
              <button onClick={()=>paginate(number)}  className='page-link'>
                {number}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Paiganition;