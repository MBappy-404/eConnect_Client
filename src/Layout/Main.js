import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import { Link,  NavLink,    } from 'react-router-dom';
import { FaBell, FaFacebookMessenger, FaUserCircle } from 'react-icons/fa';
import '../App.css'
import { FaUserFriends } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Auth';

const Main = () => {

    const{user,logOut} = useContext(AuthContext)
     const handleLogOut = () => {
          logOut()
               .then()
               .catch()

     }
     
       
      
     const nav_items = [
        {
          path: '/home',
          nav_item: 'Home',
          icon:  <svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg>,
        },
        {
            path: '/chat',
            nav_item: 'Message',
            icon: <FaFacebookMessenger className='w-7 h-7' ></FaFacebookMessenger>  ,
        },
        {
          path: '/media',
          nav_item: 'Media',
          icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0.2" version="1.1" viewBox="0 0 17 17" class="i" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"></path></svg> ,
        },
        {
          path: '/video',
          nav_item: 'Watch',
          icon: <svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg> ,
        },
        {
          path: '/people',
          nav_item: 'People',
          icon: <FaUserFriends className='w-7 h-7' ></FaUserFriends>  ,
        },
        {
           
          path: '/notification',
          nav_item: 'People',
          icon:  <FaBell  className='w-7 h-7'/>  ,
        }
      ]
      
    
     return (
          <div>
               
               <Header></Header>
                
 <div className='mt-16'>
<div class="flex">
        
        <div class="w-[250px] lg:w-[300px] border-r bg-white hidden lg:block">
            <div class="py-2  space-y-3 fixed top-0">
            <div class="hidden  mt-20 md:hidden lg:block  ">
                    <div className=' h-full     mx-auto     w-[100%]  '>
                         <div class="mt-5 px-8 text-center">
                             {user && user.photoURL ?  <> <img src={user?.photoURL}  alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" /></> : <><img class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img'/></>}
                              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                                   {user? <>{user?.displayName}</>: <>Anonymous</>}
                                   </h5>
                              
                         </div>

                         <div >
                         <ul class="px-8  mt-4">
                              <li>
                              <Link to='/profile'><a href=" " aria-label="dashboard" class="relative  px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gray-300 to-cyan-400">
                                       <FaUserCircle className='text-gray-400 w-5 h-5' ></FaUserCircle >
                                        <span class="-mr-1 font-medium">Profile</span>
                                   </a></Link>
                              </li>
                              <li>
                                   <Link to='/saved' class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700 font-medium">Saved</span>
                                   </Link>
                              </li>
                              <li>
                              <Link to='/report'><a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700 font-medium">Reports</span>
                                   </a></Link>
                              </li>
                              <li>
                              <Link to='/people'> <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                   <FaUserFriends className='w-5 h-5' ></FaUserFriends>
                                        <span class="group-hover:text-gray-700 font-medium">People</span>
                                   </a></Link>
                              </li>
                           
                              <li>
                                   <a  class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                   <button class="  flex items-center space-x-4 rounded-md text-gray-600 group">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <span onClick={handleLogOut} class="group-hover:text-gray-700 font-medium">Logout</span>
                         </button>
                                   </a>
                              </li>
                         </ul>
                         </div>       
                    </div>
               </div>
            </div>
        </div>
        
        <div class="w-full  lg:w-6/12 h-full border-r pb-5">
            <div className='flex justify-center'>
            <div class="flex py-4 px-4 mb-2 fixed rounded-b-xl shadow-lg w-full  md:w-[750px]  z-20 top-16 gap-0  md:flex lg:hidden  border-b bg-white items-center justify-between">
            {nav_items.map((e, i) => (
          <NavLink
            key={i}
            to={e.path}
            activeStyle={{ color: "red"}}
            className={({ isActive }) => isActive ? 'text-blue-600 ' : ''}>
            <span  >{e.icon}</span>
             
          </NavLink>
        ))}
                 
            </div>
            </div>
              
     <Outlet></Outlet>

        </div>
        
     <div class=" py-4 mx-auto bg-white  hidden lg:block">           
     <div class="sticky top-3 px-2 rounded-2xl ">
      <section class="flex flex-col    justify-center    text-gray-600 ">
         <div class=" ">     
            <div class="relative max-w-[340px] mx-auto bg-white    rounded-lg">
            
            <header class=" pb-4 px-5 border-b border-gray-200">
                <div class="flex justify-between items-center mb-3">
                    
                    <div class="flex items-center">
                       
                        <div class="pr-1">
                            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                <h2 class="text-xl leading-snug font-bold">Messages</h2>
                            </a>
                             
                        </div>
                    </div>
                    
                    <div class="relative inline-flex flex-shrink-0">
                        <button class="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                            <span class="sr-only">Settings</span>
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                 
            </header>
            
            <div class="py-3 px-5">
                <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                
                <div class="divide-y divide-gray-200">
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg" width="32" height="32" alt="Marie Zulfikar" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
                                <div class="text-[13px]">The video chat ended · 2hrs</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
                                <div class="text-[13px]">Hello Lauren 👋, · 24 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg" width="32" height="32" alt="Patrick Friedman" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Patrick Friedman</h4>
                                <div class="text-[13px]">Yes, you’re right but… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Byrne McKenzie</h4>
                                <div class="text-[13px]">Hey Lauren ✨, first of all… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg" width="32" height="32" alt="Scott Micheal" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Scott Micheal</h4>
                                <div class="text-[13px]">No way 🤙! · 11 Mar</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            
            <button class="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                    <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                </svg>
                <span>New Chat</span>
            </button>
        </div>
    </div>
</section>
                
                
            </div>
        </div>
    </div>
</div> 


          </div>
     );
};

export default Main;