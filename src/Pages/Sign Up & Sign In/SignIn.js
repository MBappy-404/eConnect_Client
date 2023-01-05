import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';


const SignIn = () => {

     const { register, formState: { errors }, handleSubmit } = useForm();
     const provider = new GoogleAuthProvider();
     const { signIn, googleProvider,loading,setLoading } = useContext(AuthContext);
     const [loginError, setLoginError] = useState();
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/';


     const handleLogin = data => {
          setLoginError('')

          signIn(data.email, data.password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    navigate(from, { replace: true });

               })
               .catch(err => {
                    setLoginError(err.message);
                    console.log(err.message);
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
                    setLoginError(err.message)
               })
     }




     return (
          <div>
               <div class=" bg-green-400 flex justify-center items-center">
                    <div class="absolute w-60 h-60 rounded-xl bg-green-300 -top-5 -left-16 z-0 transform rotate-45 hidden lg:block">
                    </div>
                    {/* <div class="relative w-48 h-48 rounded-xl bg-green-300 -bottom-6 left-[1000px]  transform rotate-12 hidden md:block">
                    </div> */}
                    <div className='w-full md:w-8/12 lg:w-5/12' >
                    <div class="py-12 px-5  md:px-10 mt-20 mb-20  bg-gray-200 mx-5  rounded-2xl shadow-xl">
                         <div>
                              <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Sign In Your Account</h1>
                              <p class=" text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Hi ? Welcome Back eSomaz </p>
                         </div>
                         <div class="flex flex-col mb-5 items-center">
                              <button  onClick={googleSignIn}
                                   class="w-full  font-bold shadow-sm rounded-lg py-3 bg-blue-300 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                   <div class="bg-white p-2 rounded-full">
                                        <svg class="w-4" viewBox="0 0 533.5 544.3">
                                             <path
                                                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                  fill="#4285f4" />
                                             <path
                                                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                  fill="#34a853" />
                                             <path
                                                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                  fill="#fbbc04" />
                                             <path
                                                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                  fill="#ea4335" />
                                        </svg>
                                   </div>
                                   <span class="ml-4">
                                        Continue with Google
                                   </span>
                              </button>
                         </div>

                         <div className="divider w-50 m-auto mt-5 mb-5 text-gray-700 font-semibold"> Or sign in with e-mail</div>

                         <form onSubmit={handleSubmit(handleLogin)}>
                         <div class="space-y-4">
                              <input
                                   class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                   type="email"
                                   {...register("email", {
                                        required: "Email Address is required"
                                   })}
                                   placeholder="Email"
                              /> <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
                              <input
                                   class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                   type="password"
                                   {...register("password", {
                                        required: "Password is required",
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                                        minLength: { value: 6, message: "Password must be 6 characters or longer" }
                                   })}
                                   placeholder="Password"
                              />  <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
                         </div>
                         <p>  {loginError && <p className='text-red-600 font-semibold text-center'>{loginError}</p>}</p>
                         <div class="text-center mt-6">
                              <input
                                   class="mt-5 cursor-pointer tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                   type='submit'
                                   value='Sign In'

                              />
                              <p className='text-sm text-center mt-3 font-semibold text-gray-700'>New eSomaz <span className='text-green-700 font-bold'> <Link to={'/signUp'}> Sign Up</Link> </span></p>
                         </div>
                         </form>
                    </div>
                    </div>
                    <div class="w-40 h-40 absolute bg-green-300 rounded-full top-0 right-12 hidden lg:block"></div>
                    <div
                         class="w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden lg:block">
                    </div>
               </div>
          </div>
     );
};

export default SignIn;