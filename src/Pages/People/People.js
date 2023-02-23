import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import './People.css'

const People = () => {
  const [loading, setLoading] = useState()

  const {data: users = []} = useQuery({
    queryKey:['users'],
    queryFn: async()=>{
      setLoading(true)
         const res = await fetch('https://e-somaz-server.vercel.app/users');
         const data = await res.json();
         setLoading(false)
         return data;
        
         
    }
})
  
     return (
          <div className=' flex  mt-20 lg:mt-5 justify-center'>

<div class="flex items-center justify-center w-full md:w-[750px] lg:w-[500px] lg:px-0  px-2 ">
   <div class="bg-white rounded-lg  border px-4 py-3 w-full">
     <div class="mb-4">
       <h1 class="font-bold text-xl  text-gray-700">Peoples</h1>
     </div>
     <span className='w-full block h-[1px] mb-3 bg-gray-300'></span>
     { loading ? <div className='mb-40'>

<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>
<div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
     <div class="animate-pulse flex space-x-4">
       <div class="rounded-full bg-slate-700 h-10 w-10"></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-700 rounded w-48"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
            
             <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
           </div>
         </div>
       </div>
     </div>
   </div>

</div>
    :
  
 <>   

  { users.map(user =>     <div class="flex justify-center items-center mb-8">
  <div class="mr-5">
   
    {user.photoURL?  <> <img class=" w-14 h-14  md:w-16 md:h-16 rounded-full  border border-gray-100 shadow-sm" src={user.photoURL} alt="user"/></> : <><img class="w-14 h-14 md:w-16 md:h-16 m-auto rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img'/></>}
  </div>
  <div class="w-4/5">
    <div>
      <span class="font-semibold text-sm md:text-lg text-gray-800">{user.name}</span>
      
    </div>
    <div class="font-semibold mt-2">
      <span  class="btn btn-primary btn-xs md:btn-sm outline-none rounded-full">Add Friend</span>
      <span  class="btn bg-gray-300 btn-xs md:btn-sm  ml-3 rounded-full btn-ghost">Remove</span>
    </div>
  </div>
</div>)}

</>
}
    
   </div>
 </div>
               

                   
          </div>
     );
};

export default People;