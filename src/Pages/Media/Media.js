import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ShowPost from './ShowPost';


const Media = () => {
     const [loading, setLoading] = useState();
     
    
     const {data: post = [], refetch  } = useQuery({
          queryKey:['post'],
          queryFn: async()=>{
            // setLoading(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post');
               const data = await res.json();
              //  setLoading(false)
               return data;
               
          }
     })
     return (


         <div className=' mt-14 lg:mt-0'>
           <main class="h-full w-full  grid grid-cols-1 px-2">
           <div>
                <h1 className='  mt-5 text-blue-500  font-bold text-center text-xl  text-gray-700 '>Public Posts</h1>
            </div> 
               
              { loading ? <div className='mb-40'>

               <div class="border w-full md:w-750px lg:w-[500px] shadow rounded-md p-4 mt-20  mx-auto">
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
               <div class="border w-full md:w-750px lg:w-[500px] shadow rounded-md p-4 mt-20  mx-auto">
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
               <div class="border w-full md:w-750px lg:w-[500px] shadow rounded-md p-4 mt-20  mx-auto">
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
              </div>
                   :
                 
                <>  {
                    post.map(publicPost => <ShowPost
                    key={publicPost._id}
                    refetch={refetch}
                    publicPost={publicPost}
                    ></ShowPost>)
                   }</>
     }
                   
                     
      
                </main>
         </div>

     );
};

export default Media;