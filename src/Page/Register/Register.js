import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  // using react hook form build register form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const handelregister = (data) => {
    
    const name = data.name;
    const phone = data.phone
    const amount = data.amount
    const email = data.email

    const bill = {
      name,
      email,
    }

    // create user and push user information to mongodb
    fetch('https://power-hack-server-green.vercel.app/api/registration', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials:'include',
      body: JSON.stringify(bill)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        navigate('/login')
        reset()
        toast.success('Register successfully ')
      })
      .catch(error => {
        console.log(error)
        toast.error('Somthing wrong try again')
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(handelregister)} className=' w-2/5 mx-auto '>
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
        <div className='border rounded-md'>
          <div class="relative">
            <input
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            {errors.name && <span className=' text-red-500 '>Name is required</span>}
          </div>
        </div>
        <div>
          <p>If have account? <Link to='/login' className=' text-blue-500'> login now </Link></p>
        </div>
        <div className='my-5'>
          <button className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;