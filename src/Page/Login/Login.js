import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handelLoigin = (data)=>{
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handelLoigin)} className=' w-2/5 mx-auto '>
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
          <p>Don't have account? <Link to='/register' className=' text-blue-500'> create now </Link></p>
        </div>
        <div className='my-5'>
          <button className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Login</button>
        </div>
      </form>

    </div>
  );
};

export default Login;