import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';

const SignUp = () => {

     const { register, formState: { errors }, handleSubmit } = useForm();
     const provider = new GoogleAuthProvider();
     const { createUser,googleProvider, updateUser } = useContext(AuthContext);
     const [signUpError, setSignupError] = useState('')
     const navigate = useNavigate();


     const handleSignup = data => {

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
                    navigate('/')
                    
               })
     }

       // handle google login 
       const googleSignIn = () => {

          googleProvider(provider)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    const userData = {
                         name: user?.displayName,
                         email: user?.email,
                    }

                    fetch('https://e-somaz-server.vercel.app/users', {
                         method: 'PUT',
                         headers: {
                              'content-type': 'application/json',
                         },
                         body: JSON.stringify(userData)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              if (data.acknowledged) {
                                   navigate('/')
                              }
                         })
               })
               .catch(err => {
                    console.log(err.message);
                    setSignupError(err.message);
               })
     }



     return (
          <div className='bg-white'>
               
     <div class=" my-20 mb-20 mx-3 md:mx-40 rounded-2xl   bg-green-300 shadow sm:rounded-2xl flex justify-center flex-1">
      <div class="lg:w-1/2 py-10">
        <div class="mt-2 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            Sign up for eSomaz
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col px-5 md:px-12 items-center">
              <button  onClick={googleSignIn}
                class="w-full px-5 font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <svg class="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4">
                  Sign Up with Google
                </span>
              </button>

              
            </div>

            <div className="divider w-80  m-auto mt-5 mb-5 text-gray-700 font-semibold"> Or sign up with e-mail</div>

            <div class="mx-auto px-5 md:px-12 ">
              <form onSubmit={handleSubmit(handleSignup)}>
              <input
                class="w-full mb-5 px-3 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                {...register("name", {
                    required: "Name  is required"
               })}
                placeholder="Name"
              /> <span className='text-red-600 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
              <input
                class="w-full px-3 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                {...register("email", {
                    required: "Email Address is required"
               })}
                placeholder="Email"
              /> <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
              <input
                class="w-full px-3 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                {...register("password", {
                    required: "Password is required",
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                    minLength: { value: 6, message: "Password must be 6 characters or longer" }
               })}
                placeholder="Password"
              />  <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
              <br /> <br />
              {signUpError && <p className=' text-center font-bold text-red-600'>{signUpError}</p>}
              <input
                class="mt-5 cursor-pointer tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type='submit'
                value='Sign Up'
               /> 
              </form>

                <p className='text-sm text-center mt-3 font-semibold text-gray-700'>Already have account <span className='text-green-700 font-bold'> <Link to={'/signIn'}>Log In</Link> </span></p>
                
               
              {/* <p class="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>
                and its
                <a href="#" class="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p> */} 
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1  bg-green-200 rounded-r-2xl  text-center hidden lg:flex">
        <div
          class="m-12  xl:m-16 w-full bg-[url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')] r bg-contain bg-center bg-no-repeat"
           
        ></div>
      </div>
    </div>
    
          </div>
          
     );
};

export default SignUp;