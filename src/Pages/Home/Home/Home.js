import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import { FaUserCircle } from 'react-icons/fa';
import ShowPost from '../../Media/ShowPost';
import moment from 'moment';
import '../../../App.css'
 

const Home = () => {
     const { user,loading, } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
     // const time = ;
     
     // console.log(time);
      
    

     const {data: post = [], refetch  } = useQuery({
          queryKey:['post'],
          queryFn: async()=>{
               const res = await fetch('https://e-somaz-server.vercel.app/post/top');
               const data = await res.json();
               return data;
               
          }
     })

     

      
     const handlePost = (data) => {

          const image = data.image[0];
          if( !data.post && !data.image[0] ){
               return alert('please filap form')
          }
          if(!data.image[0]){
               const Post = {
                    post: data?.post,
                    postUser: user?.displayName,
                    like:0,
                    comment:[],
                    time:new Date(),
                    userEmail: user?.email,
                    postUserPhoto: user?.photoURL
               }

               fetch('https://e-somaz-server.vercel.app/post', {
                    method: 'POST',
                    headers: {
                         'content-type': 'application/json',
                         
                    },
                    body: JSON.stringify(Post)
               })
               .then(res => res.json())
               .then( data => {
                    console.log(data);
                    navigate('/media')
                    
                    // toast.success('doctor add success')
                    // navigate('/dashboard/manageDoctor')
               })   
          }
          // console.log(image);
          const formData = new FormData();
          formData.append('image', image);
          // console.log(formData);
              
               fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
                    method: 'POST',
                    body: formData
               })
               .then(res => res.json())
               .then( imageData => {
                    // console.log(imageData);
                 if (imageData.success) {
                    //with image
               const Post = {
                    post: data?.post,
                    image: imageData.data.url,
                    postUser: user?.displayName,
                    time:new Date(),
                    like:0,
                    comment:[],
                    userEmail: user?.email,
                    postUserPhoto: user?.photoURL
               }
     
               fetch('https://e-somaz-server.vercel.app/post', {
                    method: 'POST',
                    headers: {
                         'content-type': 'application/json',
                         
                    },
                    body: JSON.stringify(Post)
               })
               .then(res => res.json())
               .then( data => {
                    console.log(data);
                    navigate('/media')
                    
                    // toast.success('doctor add success')
                    // navigate('/dashboard/manageDoctor')
               })   
               }  
             })
             
            




     }
     return (
//           

<div className='mt-16'>
<div class="flex">
        {/* <!-- Menu --> */}
        <div class="w-[250px] lg:w-[300px] border-r bg-white hidden lg:block">
            <div class="py-2  space-y-3 fixed top-0">
            <div class="hidden  mt-20 md:hidden lg:block  ">
                    <div className=' h-full     mx-auto     w-[100%]  '>
                         <div class="mt-5 px-8 text-center">
                             {user?  <> <img src={user?.photoURL}  alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" /></> : <><img class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img'/></>}
                              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                                   {user? <>{user?.displayName}</>: <>Anonymous</>}
                                   </h5>
                              
                         </div>

                         <div >
                         <ul class="px-8  mt-4">
                              <li>
                                   <a href=" " aria-label="dashboard" class="relative  px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gray-300 to-cyan-400">
                                       <FaUserCircle className='text-gray-400' ></FaUserCircle >
                                        <span class="-mr-1 font-medium"><Link to='/profile'>Profile</Link></span>
                                   </a>
                              </li>
                              <li>
                                   <Link class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Saved</span>
                                   </Link>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Reports</span>
                                   </a>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">People</span>
                                   </a>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Finance</span>
                                   </a>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                   <button class="  flex items-center space-x-4 rounded-md text-gray-600 group">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <span class="group-hover:text-gray-700">Logout</span>
                         </button>
                                   </a>
                              </li>
                         </ul>
                         </div>
                         
                    </div>

                   
               </div>

            </div>


        </div>
        {/* <!-- News Content --> */}
        <div class="w-full lg:w-6/12 border-r">
            <nav class="flex py-4 px-4 sticky sm:block lg:hidden  top-0 border-b bg-white items-center justify-between">
                <h1 class="font-extrabold tracking-wide text-lg ">Home</h1>
                <div class="text-blue-400">
                    <i class="fa fa-dot-circle-o"></i>
                </div>
               
                    {/* <h1 className='text-xl md:text-3xl mt-10 ml-0 md:ml-0 lg:ml-[440px] text-gray-600 font-semibold'>Popular Posts</h1> */}
            </nav>
             
         
    
      

 
  
 
       {/* story  */}
            <div className='  flex justify-center px-2'>
                <div className=' bg-white w-full lg:w-[500px] mt-5 md:mx-0  rounded-xl m-auto'>
             
                <div class="flex space-x-2 mx-auto max-w-2xl p-2 relative">
         
         <div class="  w-28 h-52 md:w-36 md:h-52  rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
             <img class="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed"/>
             <div class="bg-gray-800 relative flex-1 flex flex-col">
                 <div class="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                     </svg>
                 </div>
                 <div class="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                     <p>
                         Create Story
                     </p>
                 </div>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
         </div>
        
         <div class="  w-28 h-52 md:w-36 md:h-52  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=1" alt="MD. Shibbir Ahmed"/>
 
             <div class="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Your Story</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
       
         <div class=" w-28 h-52 md:w-36 md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="MD. Shibbir Ahmed"/>
 
             <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="MD. Shibbir Ahmed"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Baky Billah</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
         <div class=" w-28 h-52 md:w-36 hidden md:block md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="MD. Shibbir Ahmed"/>
 
             <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="MD. Shibbir Ahmed"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Baky Billah</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
         </div>
       
                </div>
                </div>


                {/* Post  */}
            <div className='  flex justify-center px-2'>
                <div className=' bg-white w-full lg:w-[500px] mt-5 md:mx-0  rounded-xl m-auto'>
                    <form onSubmit={handleSubmit(handlePost)}>
                 <div class="flex">
                    <div class="m-2  py-1">
                        <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="" />
                    </div>
                    <div class="flex-1 px-2 pt-2 mt-2">
                        <input class=" bg-transparent text-gray-700 border  text-md focus:outline-none pl-3  w-full h-10 rounded-full"  placeholder="Write something?"  {...register("post", {})}/> 
                    </div>                    
                </div>
                 <div class="flex justify-start">

                    <div class="w-full px-2">
                        
                        <div class="flex  items-center justify-evenly">
                            <div class=" text-center px-1 py-1 m-2">
                                <span  class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:text-blue-400">
                                  <label htmlFor="icon-button-file">
                                  <svg class="text-center cursor-pointer h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                  </label>
                                  <input id="icon-button-file" type="file" {...register("image", {})}
                                  className="file-input hidden mt-2 file-input-bordered file-input-primary w-full max-w-xs"/>Photos
                                  </span>
                            </div>

                             

                            <div class=" text-center py-2 m-2">
                                <span   class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full   hover:text-blue-400">
                                <svg class="text-center h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Felling
                            </span>
                            </div>
                            <div>
                            <input    type='submit' value='Post'   className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full"/>
                            </div>
                        </div>
                    </div>

                    
                </div>
                </form>
                </div>
                </div>


                
            <main class="h-full w-full px-2">
                  
                  {
                   post.map(publicPost => <ShowPost
                   key={publicPost._id}
                   refetch={refetch}
                   publicPost={publicPost}
                   ></ShowPost>)
                  }
                   
                     
      
                </main>
        </div>
        {/* <!-- Follow and trends --> */}
        <div class=" py-4 mx-auto bg-white  hidden lg:block">
           
           
            <div class="sticky top-3 px-2 rounded-2xl ">
                
             
            <section class="flex flex-col    justify-center    text-gray-600 ">
    <div class=" ">
        
        <div class="relative max-w-[340px] mx-auto bg-white    rounded-lg">
            
            <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                <div class="flex justify-between items-center mb-3">
                    
                    <div class="flex items-center">
                        <a class="inline-flex items-start mr-3" href="#0">
                            <img class="rounded-full" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg" width="48" height="48" alt="Lauren Marsano" />
                        </a>
                        <div class="pr-1">
                            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                <h2 class="text-xl leading-snug font-bold">Lauren Marsano</h2>
                            </a>
                            <a class="block text-sm font-medium hover:text-indigo-500" href="#0">@lauren.mars</a>
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
                
                <div class="flex flex-wrap justify-center sm:justify-start space-x-4">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                        </svg>
                        <span class="text-sm whitespace-nowrap ml-2">Milan, IT</span>
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                        </svg>
                        <a class="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">carolinmcneail.com</a>
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





     );
};

export default Home;