import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UpdateBillingModal = ({bill }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // ak ta update hoyor por ar akta relode charra hoy na.
  const [openM, setOpenM] = useState(true)
  
  const {name, phone, amount, email } = bill;
  // update and set api
  const updateBill =(data)=>{
    const dddd = {
      name:data.name || name,
      phone:data.phone || phone,
      email:data.email || email,
      amount:data.amount || amount
    }
    fetch(`https://power-hack-server-tawhidul3233.vercel.app/api/update-billing/${bill._id}`, 
    {
      method: "PUT",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(dddd)
    })
    .then(res => res.json())
    .then(data => {
      setOpenM(false)
      console.log(data)
      toast.success('Bill information updated')
      
    } ) 
    setOpenM(true)
    .catch(error =>{
      console.log(error)
      toast.error('Bill info not changed something wrong')
    })
   
  }
  if(openM) 
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold my-5">Update billing information</h3>
         
          <form onSubmit={ handleSubmit (updateBill) }>
            <div className='border rounded-md'>
              <div class="relative">
                <input
                  defaultValue={bill?.name}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter full name"
                  {...register("name")}
                />
                {errors.name && <span className=' text-red-500 '>Name is required</span>}
              </div>
            </div>
            <div className='border rounded-md my-3'>
              <div class="relative">
                <input
                  defaultValue={bill?.email}
                  type=""
                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email",
                    {
                      
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
                  defaultValue={bill?.phone}
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter phone"
                    {...register("phone",
                      {
                       
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
                  defaultValue={bill?.amount}
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter Amount$"
                    {...register("amount", {
                     
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
              <button className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Save bill</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBillingModal;