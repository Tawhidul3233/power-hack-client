import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'react-hot-toast';
import BillingTable from '../BillingTable/BillingTable';

const AddBillingModal = (sendbill) => {
     // console.log(bill.email)
     // const [data, setdata] = useState([])
     // create modal to add bills in database
     const [openM, setOpenM] = useState(true)
     const { register, handleSubmit, reset, formState: { errors } } = useForm();

     const [another, setAnother] = useState(false)
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
     const [billingId, setBillingId] = useState(null);

     <>
          <BillingTable loading={loading} error={error} billingId={billingId}></BillingTable>
     </>

     const billSubmit = (data) => {
          setAnother(true)
          reset()
          setOpenM(false)
          const name = data.name;
          const phone = data.phone
          const amount = data.amount
          const email = data.email

          const bill = {
               name,
               phone,
               email,
               amount
          }

          setLoading(true)
          // fetch data and post billing list in mongodb
          fetch('https://power-hack-server-green.vercel.app/api/add-billing', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(bill)

          })
               .then(response => {
                    if (!response.ok) {
                         throw new Error(response.statusText);
                    }
                    return response.json();
               })
               .then(data => {
                    if (data.status === 'success') {
                         setBillingId(data.billingId);
                         setLoading(false);
                         setError(null);

                    } else {
                         setLoading(false);
                         setError(data.errorMessage);
                    }
               })
               .catch(error => {
                    setLoading(false);
                    setError(error.message);
               });

     }

     if (openM)
          return (
               <div>

                    <input type="checkbox" id="bill-modal" className="modal-toggle" />
                    <div className="modal">
                         <div className="modal-box relative">
                              <label htmlFor="bill-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h3 className="text-lg font-bold my-5">Fill new billing information</h3>{
                                   another === true && <p className='my-2 text-success text-lg font-semibold'>Add another bill</p>
                              }

                              <form onFocus={() => setAnother(false)} onSubmit={handleSubmit(billSubmit)}>
                                   <div className='border rounded-md'>
                                        <div class="relative">
                                             <input
                                                  type="text"
                                                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                  placeholder="Enter full name"
                                                  {...register("name", { required: true })}
                                             />
                                             {errors.name && <span className=' text-red-500 '>Name is required</span>}
                                        </div>
                                   </div>
                                   <div className='border rounded-md my-3'>
                                        <div class="relative">
                                             <input
                                                  type=""
                                                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                  placeholder="Enter email"
                                                  {...register("email",
                                                       {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                 message: 'invalid email address'
                                                            }

                                                       })}
                                             />
                                             {errors.email && <span className=' text-red-500 '>{errors.email.message}</span>}
                                        </div>
                                   </div>
                                   <div className=' grid grid-cols-2 gap-4'>
                                        <div className=' col-span-1 border rounded-md'>
                                             <div class="relative">
                                                  <input
                                                       type="text"
                                                       class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                       placeholder="Enter phone"
                                                       {...register("phone",
                                                            {
                                                                 required: 'Phone number requierd',
                                                                 maxLength: {
                                                                      value: 11,
                                                                      message: ' Not more than 11 Digit number'
                                                                 },
                                                                 minLength: {
                                                                      value: 11,
                                                                      message: 'must 11 Digit Phone Number'
                                                                 },
                                                                 pattern: {
                                                                      value: /^[0-9]*$/,
                                                                      message: 'Value Must Number'

                                                                 }
                                                            })}
                                                  />
                                                  {errors.phone && <span className=' text-red-500 '>{errors.phone.message}</span>}
                                             </div>
                                        </div>
                                        <div className=' col-span-1 border rounded-md'>
                                             <div class="relative">
                                                  <input
                                                       type="text"
                                                       class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                                       placeholder="Enter Amount$"
                                                       {...register("amount", {
                                                            required: 'Amount requierd',
                                                            pattern: {
                                                                 value: /^[0-9]*$/,
                                                                 message: 'Value Must Number'

                                                            }
                                                       })}
                                                  />
                                                  {errors.amount && <span className=' text-red-500 '>{errors.amount.message} </span>}
                                             </div>
                                        </div>
                                   </div>
                                   <div className='my-5'>
                                        <button htmlFor="bill-modal" className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Save bill</button>
                                   </div>
                              </form>

                         </div>
                    </div>
               </div>
          );
};

export default AddBillingModal;