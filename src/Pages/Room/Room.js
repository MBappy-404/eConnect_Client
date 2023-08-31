import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import './Room.css'
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { io } from 'socket.io-client';
import { FaArrowRight } from 'react-icons/fa';



const Room = () => {

   const { user } = useContext(AuthContext)
   const [messages, setMessages] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const endMessageFocus = useRef(null);


   //   connect socket server 
   const socket = io("https://chat-server-drtd.onrender.com")

   const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await fetch('https://e-somaz-server.vercel.app/users');
         const data = await res.json();
         return data;
      }
   })

   let updatedName = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedName)

   // console.log(messages);

   useEffect(() => {
      // Listen for incoming messages
      socket.on('message', (data) => {
         setMessages((prevMessages) => [...prevMessages, data]);
      });
      // Clean up the event listener on unmount
      return () => {
         socket.off('message');
      };
   }, []);




   const handleMessageSend = (event) => {


      // get user name and photo 
      let name = users?.filter(users => { return users?.email === user?.email }).map(eUser => eUser?.name)
      let updatedName = users?.filter(users => { return users?.email === user?.email }).map(eUser => eUser?.updatedName)
      let photo = users?.filter(users => { return users?.email === user?.email }).map(eUser => eUser?.updatedPhoto)
      const senderName = updatedName[0] ? updatedName[0] : name[0];
      const senderPhoto = photo ? photo[0] : user?.photoURL

      event.preventDefault()

      if (inputValue.trim() !== '') {
         const message = {
            text: inputValue,
            user: senderName,
            email: user?.email,
            photo: senderPhoto
         };
         // send user message 
         socket.emit('message', message);
         setInputValue('');
      }
      else { toast.warning("Please write some word") }
   };

   const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleMessageSend(event);
      }
    };

   // auto scrolling messages 
   useEffect(() => {
      endMessageFocus.current?.scrollIntoView({ behavior: 'smooth' });
   }, [messages]);


   return (
      <div className='pt-16  md:pt-0 room px-1 '>

         {/* network notice modal  */}
         <input type="checkbox" id="my-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box  text-justify">
               <h1 className='text-center font-bold text-xl mb-4 text-gray-600'>Network Notice</h1>

               <p className='text-lg mb-5'>
                  <FaArrowRight className='w-4 h-4 mr-1 inline ' /> If the message is not sent or received, please wait for a while. Basically it can be due to weak connection of your network or server connection. Thanks stay with us.
               </p>
               <p>
                  <FaArrowRight className='w-4 h-4 mr-1 inline' /> যদি মেসেজ সেন্ড না হয় কিংবা রিসিভ না হয় তাহলে অনুগ্রহপূর্বক কিছুক্ষণ অপেক্ষা করুন। মূলত আপনার নেটওয়ার্কের দুর্বল কানেকশনের জন্য কিংবা সার্ভারের কানেকশনের জন্য এরকম হতে পারে। ধন্যবাদ আমাদের সাথেই থাকুন।
               </p>
               <div className="modal-action">
                  <label htmlFor="my-modal" className="btn btn-primary">Ok</label>
               </div>
            </div>
         </div>

         {/* <!-- component --> */}
         <div class="flex-1  sm:p-6 px-2  mt-5 md:mt-20 lg:mt-5 -mb-5 rounded-2xl  justify-between flex w-full  md:w-[750px] mx-auto bg-white lg:w-[500px] 2xl:w-[600px] flex-col h-screen">
            <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
               <div class="relative flex items-center space-x-4">
                  <div class="relative">
                  </div>
                  <div class="flex flex-col leading-tight">
                     <div class="text-sm md:text-xl  mt-1 flex items-center">
                        <span class="text-gray-500 font-extrabold mr-3">eConnect Room</span>
                     </div>
                     <span class="text-sm md:text-md font-normal text-gray-600">{users?.length} Members In This Room </span>
                  </div>
               </div>
               {/* icons */}
               <div class="flex items-center mr-3">

                  <label htmlFor="my-modal" className='cursor-pointer'>

                     <span class="inline-block relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-blue-500 bg-green-600"></span>
                     </span>

                  </label>
               </div>

            </div>
            <div className='text-center font-semibold'>
               <p>Now start conversation</p>
            </div>
            <div id="chat-scroll" class="flex flex-col space-y-0 px-1 pb-3 chat-scroll  overflow-y-auto overflow-hidden  ">
               <div class="flex items-end">
                  <div class="flex flex-col space-y-2 mb-2 transition-opacity   text-xs font-semibold max-w-xs mx-2 order-2 items-start">

                     <div>
                        <span className='ml-3  block  text-gray-400 text-xs'>Bappy(CEO)</span>
                        <div class="px-4 max-w-[280px] py-2 text-sm rounded-lg rounded-bl-none inline-block bg-gray-300 text-gray-800">
                           Hello "{updatedName ? updatedName : user?.displayName}"..Welcome to eConnect. </div>
                     </div>
                  </div>
                  <img src="https://images-platform.99static.com/kMoKZjRdwOlG2ppB6u0eeqE0L-4=/783x767:1504x1488/500x500/top/smart/99designs-contests-attachments/121/121158/attachment_121158757" alt="My profile" class="w-5 h-5 md:w-6 md:h-6 rounded-full order-1" />
               </div>
               {
                  messages?.map((message, i) =>
                     <div class="chat-message" key={i + 1} >

                        {
                           message.email !== user.email ?
                              //   message receive
                              <div class="flex items-end">
                                 <div class="flex flex-col space-y-2    text-xs   mx-2 order-2 mb-2 items-start">
                                    <span className=' -mb-2 ml-1 block text-gray-500 text-[11px]'>
                                       {message?.email === "sadikulsad0810@gmail.com" ? <>CEO</> : <>{message.user}</>}</span>
                                    <div>
                                       <div class="px-4 break-all py-2 text-sm  max-w-[250px] rounded-lg rounded-bl-none block bg-gray-300 text-gray-800">{message?.text}</div>
                                    </div>
                                 </div>
                                 {
                                    message.photo ? <img src={message.photo} alt="My profile" class="w-5 h-5 md:w-6  border-gray-400 border  md:h-6 rounded-full order-1" /> : <img src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" alt="My profile" class="w-5 h-5 md:w-6  border-gray-400 border  md:h-6 rounded-full order-1" />
                                 }
                              </div> :

                              // message send 
                              <div class="chat-message">
                                 <div class="flex items-end justify-end">
                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 mb-2 order-1 items-end">
                                       <span className='-mb-2 mr-2 block text-gray-500 text-[11px]'>You</span>
                                       <div>
                                          <div class="px-4 break-all py-2 text-sm max-w-[250px]  block rounded-lg  rounded-br-none bg-blue-600 text-white ">{message?.text}</div>
                                       </div>
                                    </div>
                                    {
                                       message.photo ? <img src={message.photo} alt="My profile" class="w-5 h-5 md:w-6  border-gray-400 border  md:h-6 rounded-full order-1" /> : <img src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" alt="My profile" class="w-4 h-4 md:w-5  border-gray-400 border  md:h-5 rounded-full order-1" />
                                    }

                                 </div>

                              </div>
                        }
                        <div ref={endMessageFocus} />
                     </div >
                  )
               }

            </div>
            <form onSubmit={handleMessageSend}>
               <div class="pt-4 pb-4 md:pb-0">

                  <div class="flex items-center bg-gray-200  rounded-lg py-1">
                     <textarea
                        onKeyDown={handleKeyDown}
                        spellCheck={false}
                        value={inputValue}
                        name="message"
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                        placeholder="Write your message!"
                        class="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" ></textarea>
                     <button
                        type='submit'
                        class="flex-shrink-0 flex bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-2 px-2 rounded">
                        <span class="font-semibold">Send</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4 md:h-6 md:w-6 ml-1 transform rotate-90">
                           <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Room;