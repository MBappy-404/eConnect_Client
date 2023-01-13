

import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import ShowPost from '../../Media/ShowPost';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
 
 
 

const Home = () => {
     const { user } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
     const [loading, setLoading] = useState()
     const [loading2, setLoading2] = useState()
     
      
    

     const {data: post = [], refetch  } = useQuery({
          queryKey:['post'],
          queryFn: async()=>{
            // setLoading2(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post/top');
               const data = await res.json();
               setLoading2(false)
               return data;
              
               
          }
     })

     

      
     const handlePost = (data) => {

       

          if(user){
    
          const image = data.image[0];
          if( !data.post && !data.image[0] ){
               return  toast.error("Please write something");
          }
           setLoading(true)
          if(!data.image[0]){
            // create post without image 
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
                    toast.success("Your post is publish ");
                    setLoading(false)
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
                    //create post  with image
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
                    toast.success( "Your post is Publish ");
                    navigate('/media')
                    setLoading(false)
                    
                    // toast.success('doctor add success')
                    
               })   
               }  
             })
             
          
            }
            else{
                toast.warning( "Please Login or SignUp");
            }
     }
     return (
//           

<div className=''>
 
        
        {/* <!-- post Content --> */}
        <div class="w-full h-full border-r pb-5">
 
       {/* story  */}
           {user? 
           <>
            <div className='flex justify-center px-2'>
                <div className=' bg-white w-full lg:w-[500px] md:w-[750px] mt-5 md:mx-0  rounded-xl m-auto'>
             
                <div class="flex space-x-2 mx-auto max-w-2xl p-2 relative">
         
         <div class="w-28 h-52 md:w-36 md:h-52  rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
             <img class="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={user?.photoURL} alt="img"/>
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
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={user?.photoURL} alt="img"/>
 
             <div class="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src={user?.photoURL} alt="img"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Your Story</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
       
         <div class=" w-28 h-52 md:w-36 md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="img"/>
 
             <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="img"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Baky Billah</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
         <div class=" w-28 h-52 md:w-36 hidden md:block md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
             <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="img"/>
 
             <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                 <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="img"/>
             </div>
 
             <div class="absolute inset-x-3 bottom-1">
                 <p class="text-white font-semibold">Jackness</p>
             </div>
 
             <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
 
         </div>
         </div>
       
                </div>
                </div>
           </>: ''}


                {/* create Post  */}
            <div className='  flex justify-center px-2'>
          
                <div className=' bg-white w-full md:w-[750px] lg:w-[500px] mt-5 md:mx-0  rounded-xl m-auto'>
                 
                 
                <form onSubmit={handleSubmit(handlePost)}>
                <div class="flex">
                   <div class="m-2  py-1">
                   {
                    user?.photoURL ? <img class="inline-block h-10 w-10 rounded-full" src={user?.photoURL} alt='img' /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' class="inline-block h-10 w-10 rounded-full" alt='img' />
                    }
                   </div>
                   <div class="flex-1 pr-5 pt-2 mt-2">
                       <input class=" bg-transparent text-gray-700 border  text-md focus:outline-none pl-3 w-full h-10 rounded-full"  placeholder="Write something?"  {...register("post", {})}/> 
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
                          
                         {loading? <button type='submit' className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full">
                         <RotatingLines
                           strokeColor="white"
                           strokeWidth="5"
                           animationDuration="0.75"
                           width="25"
                           display='inline'
                           visible={true}
                         />
                         
                         </button>: <button type='submit' className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full">Post</button>}
                           </div>
                       </div>
                   </div>
               </div>
               </form> 
                </div>
                </div>
             {/* show home page posts  */}
            <main class="h-full w-full px-2">  
            <div>
                <h1 className='text-xl text-center mt-5 text-gray-700 font-bold'>Popular Posts</h1>
                 
            </div>                
                 {loading2?  <div className='flex justify-center mt-5 mb-20'>
                    {/* <RotatingLines
                           strokeColor="blue"
                           strokeWidth="3"
                           animationDuration="0.75"
                           width="40"
                           visible={true}
                         /> */}
                    <div class="border w-full md:w-750px lg:w-[500px] shadow rounded-md p-4    mx-auto">
                    <div class="animate-pulse flex space-x-4">
                      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                      <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                          <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                          </div>
                          <div class="h-2 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>  : <>
                          {
                   post.map(publicPost => <ShowPost
                   key={publicPost._id}
                   refetch={refetch}
                   publicPost={publicPost}
                    
                   ></ShowPost>)
                  }
                         
                         </> }
                   
                </main>
        </div>
</div>





     );
};

export default Home;