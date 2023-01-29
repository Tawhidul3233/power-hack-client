import React from 'react';
import { useForm } from "react-hook-form";

const AddBillingModal = () => {

     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);

     const submitbookingmodal = (event) => {
          event.preventDefault()
          if (!user) {
               return toast.error('You need to login') && navigate('/login') && <Navigate state={{ from: location }} replace></Navigate>
          }

          const form = event.target;
          const displayName = form.name.value;
          const email = form.email.value;
          const product_name = form.product_name.value;
          const resale_price = form.resale_price.value;
          const location = form.location.value;
          const mobile_number = form.mobile_number.value;

          const order = {
               displayName,
               email,
               product_name,
               resale_price,
               location,
               mobile_number,
               product_img: itemProduct?.product_img
          }

          fetch('https://usedphone-server.vercel.app/orders', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(order)
          })
               .then(res => res.json())
               .then(data => {
                    setItemProduct(null)
                    toast.success('Order Booked successfully')

               })
               .catch(error => {
                    console.log(error)
                    toast.error('Somthing wrong try again')
               })

     }



     return (
          <div>
               <input type="checkbox" id="my-modal-3" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h3 className="text-lg font-bold my-5">Fill new billing information</h3>
                         <form onSubmit={handleSubmit(onSubmit)}>
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
                                             type="email"
                                             class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                             placeholder="Enter email"
                                             {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className=' text-red-500 '>Email is required</span>}
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
                                                            maxLength: 11,
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
                                   <button className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Save new bill</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default AddBillingModal;