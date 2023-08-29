
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/Auth';
import { ThreeDots } from 'react-loader-spinner';

const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState()
  const [signUpError, setSignupError] = useState('')
  const navigate = useNavigate();


  const handleSignup = data => {
    setLoading(true)
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        const userInfo = {

          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.password, data.type)
          })

          .catch(err => console.log(err))
      })
      .catch(err => {
        setSignupError(err.message);
        console.log(err.message);
      })
  }

  // user store data base 
  const saveUser = (name, email, password) => {

    const user = {
      name,
      email,
      password,
      photoURL: ''

    };

    fetch('https://e-somaz-server.vercel.app/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoading(false)
        navigate('/')
        toast.success(" Welcome to eConnect ");

      })
  }




  return (
    <div className='bg-gradient-to-t from-zinc-900 via-violet-600 to-indigo-600 py-24 md:py-20 text-white'>

      <div class="   mx-3 md:mx-40 rounded-2xl   sm:rounded-2xl flex justify-center flex-1">
        <div class="lg:w-1/2 py-10">
          <div class="mt-2 flex flex-col items-center">
            <h1 class="text-2xl  font-bold">
             Create New Account
            </h1>
            <div class="w-full flex-1 mt-4">
              <div class="flex flex-col px-5 md:px-12 items-center">
              </div>
              <div class="mx-auto px-5 md:px-12 ">
                <form onSubmit={handleSubmit(handleSignup)}>
                  <input
                    class="w-full mb-5 px-8  text-gray-600 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    {...register("name", {
                      required: "Name  is required"
                    })}
                    placeholder="Name"
                  /> <span className='text-red-300 -mt-4 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
                  <input
                    class="w-full  text-gray-600  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    {...register("email", {
                      required: "Email Address is required"
                    })}
                    placeholder="Email"
                  /> <span className='text-red-300 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
                  <input
                    class="w-full  text-gray-600 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                      minLength: { value: 6, message: "Password must be 6 characters or longer" }
                    })}
                    placeholder="Password"
                  />  <span className='text-red-300 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
                  <br /> <br />
                  {signUpError && <p className=' text-center font-bold text-red-400'>{signUpError}</p>}
                  {
                    loading ? <button
                      class="mt-3 cursor-pointer tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"><ThreeDots height="24" width="50" radius="9" color="white" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}
                      /></button> :
                      <button
                        class="mt-3 cursor-pointer tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        type='submit'>Sign Up</button>
                  }
                </form>

                <p className='text-sm text-center mt-3  font-semibold text-white'>Already have account? <span className='text-white font-extrabold'> <Link to={'/signIn'}>Log In</Link> </span></p>

                {/* terms and policy */}
                <p class="mt-6 text-xs  text-center">
                  <input type="checkbox" className=' cursor-pointer mr-2' />
                  I agree to abide by eConnect
                  <a href="#" class="border-b ml-1 mr-1 border-gray-500 border-dotted">
                    Terms of Service 
                  </a>
                  and its
                  <a href="#" class="border-b ml-1 border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1    rounded-r-2xl  text-center hidden lg:flex">
          <div
            class="m-12  xl:m-16 w-full bg-[url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')] r bg-contain bg-center bg-no-repeat"

          ></div>
        </div>
      </div>

    </div>

  );
};

export default SignUp;