import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import './Room.css'
import { toast } from 'react-toastify';

const Room = () => {
   const { user } = useContext(AuthContext)
   const [forms, setForms] = useState([])
   const [count, setCount] = useState(0)

   const handleChat = (event) => {
      event.preventDefault()

      const form = event.target;
      const chat = form.message.value;
      if (form.message.value === '') {
         return toast.warning('Write something')
      }
      //  console.log(chat);
      const data = { chat }
      setCount(count + 1)
      setForms([...forms, data])
      form.reset()

   }


   return (
      <div className='pt-16  md:pt-0 room px-1 '>
         {/* <!-- component --> */}
         <div class="flex-1  sm:p-6 px-2  mt-5 md:mt-20 lg:mt-5 -mb-5 rounded-2xl  justify-between flex w-full  md:w-[750px] mx-auto bg-white lg:w-[500px] flex-col h-screen">
            <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
               <div class="relative flex items-center space-x-4">
                  <div class="relative">
                     <span class="absolute text-green-500 right-0 bottom-0">
                        <svg className='w-4 h-4 md:w-26 md:h-26'>
                           <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                        </svg>
                     </span>
                     {
                        user?.photoURL ? <img class="inline-block h-10  w-10 md:w-16 md:h-16 rounded-full" src={user?.photoURL} alt='img' /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' class="inline-block h-10 w-10 rounded-full" alt='img' />
                     }
                  </div>
                  <div class="flex flex-col leading-tight">
                     <div class="text-sm md:text-xl  mt-1 flex items-center">
                        <span class="text-gray-700 font-extrabold mr-3">{user?.displayName}</span>
                     </div>
                     <span class="text-sm md:text-lg text-gray-600"> User</span>
                  </div>
               </div>
               <div class="flex items-center space-x-2">
                  <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                     </svg>
                  </button>
                  <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                     </svg>
                  </button>
                  <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                     </svg>
                  </button>
               </div>

            </div>
            <div className='text-center font-semibold'>
               <p>Now start conversation</p>
            </div>
            <div id="messages" class="flex flex-col space-y-4 p-3   scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter overflow-y-auto overflow-hidden scrollbar-w-2  ">
               <div class="chat-message  " >
                  <div class="flex items-end">
                     <div class="flex flex-col space-y-2 transition-opacity  text-xs font-semibold max-w-xs mx-2 order-2 items-start">

                        <div>
                           <span className='ml-3 -mb-2 text-gray-400 text-xs'>Bappy(CEO)</span>
                           <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-800">Hello "{user?.displayName}"..Welcome to Esomaz. </span>

                        </div>

                        <div>
                           <span className='ml-3 -mb-2 text-gray-400 text-xs'>Bappy(CEO)</span>
                           <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-800"> Please wait for our next updates and stay with us🥰</span>
                        </div>

                     </div>
                     <img src="https://images-platform.99static.com/kMoKZjRdwOlG2ppB6u0eeqE0L-4=/783x767:1504x1488/500x500/top/smart/99designs-contests-attachments/121/121158/attachment_121158757" alt="My profile" class="w-6   h-6 rounded-full order-1" />
                  </div>
               </div>

               <div class="chat-message">
                  {
                     forms?.map((message, i) => <div key={i + 1} class="flex items-end justify-end">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 mb-2 order-1 items-end">
                           <div>
                              <span className='ml-3  block text-gray-400 text-xs'>You</span>
                              <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message.chat}</span>
                           </div>
                        </div>
                        {
                           user?.photoURL ? <img class="w-6 h-6 rounded-full order-2" src={user?.photoURL} alt='img' /> : <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2" />
                        }
                     </div>)
                  }
               </div>




            </div>
            <form onSubmit={handleChat}>
               <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                  <div class="relative flex">

                     <span class="absolute inset-y-0 flex items-center">
                        <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                           </svg>
                        </button>
                     </span>
                     <input type="text" name='message' placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
                     <div class="absolute right-0 items-center inset-y-0 ">
                        <button type="submit" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-700 focus:outline-none">
                           <span class="font-bold">Send</span>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                           </svg>
                        </button>
                     </div>

                  </div>
               </div>
            </form>
         </div>




      </div>
   );
};

export default Room;