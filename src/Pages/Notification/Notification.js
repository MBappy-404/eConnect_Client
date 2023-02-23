import { useQuery } from '@tanstack/react-query';
import React from 'react';
import moment from 'moment/moment';
import { useState } from 'react';

const Notification = () => {
    const [loading, setLoading] = useState();

    const {data: post = []} = useQuery({
        queryKey:['post'],
        queryFn: async()=>{
          setLoading(true)
             const res = await fetch('https://e-somaz-server.vercel.app/post');
             const data = await res.json();
             setLoading(false)
             return data;
             
        }
   })

     return (
          <div className='py-4 px-2  mt-16 lg:mt-0'>
               {/* <!-- component --> */}
{/* <!-- start: Social Network notification:light --> */}
<div className='flex justify-center'>
    <div class="bg-white  px-2 py-3.5 rounded-lg shadow hover:shadow-xl w-full md:w-[750px] lg:w-[500px] ">
        <div class=" flex items-center justify-between">
            <span class="font-bold text-xl text-slate-600 mb-3">New Notification</span>
           
        </div>
        <span className='w-full block h-[1px] bg-gray-400 mb-3'></span>
      

{ loading ? <div className='mb-40'>

<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-72"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
           
             <div class="h-2 bg-slate-700 rounded col-span-1 w-60"></div>
           </div>
           <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-72"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
           
             <div class="h-2 bg-slate-700 rounded col-span-1 w-60"></div>
           </div>
           <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-72"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
           
             <div class="h-2 bg-slate-700 rounded col-span-1 w-60"></div>
           </div>
           <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-72"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
           
             <div class="h-2 bg-slate-700 rounded col-span-1 w-60"></div>
           </div>
           <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-72"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
           
             <div class="h-2 bg-slate-700 rounded col-span-1 w-60"></div>
           </div>
           <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
         </div>
       </div>
     </div>
   </div>
</div>
    :
  
 <>   {
    post.map(publicPost =>  <div class="flex items-center mt-2  pl-5 rounded-lg px-1 py-1 cursor-pointer">
    <div class="relative flex flex-shrink-0 items-end">
       {publicPost.postUserPhoto ? <> <img class="h-16 w-16 rounded-full" src={publicPost.postUserPhoto} alt=''/></> : <> <img class="h-16 w-16 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt=''/> </> }   
        <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
    </div>
    <div class="ml-3">
        <span class="font-bold tracking-tight text-sm">{publicPost.postUser}</span>
        <span class="text-xs ml-2 leading-none font-semibold text-gray-500 ">
              
            {publicPost.image ? 'Add a photo' : 'Write a post' }

        </span>
        <p class="text-sm leading-4  italic opacity-70">{ publicPost.post && publicPost.post.length > 15 ? <>{publicPost.post.slice(0,15)}...</>: <>{publicPost.post}</> }</p>
        <span class="text-[10px] text-blue-600 font-medium leading-4"> {moment(`${publicPost.time}`).fromNow()}</span>
    </div>
</div> )
   


}</>
}
     
    </div>
</div>
 
{/* <!-- end: Social Network notification:dark --> */}
          </div>
     );
};

export default Notification;