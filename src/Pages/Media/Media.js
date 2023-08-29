import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ShowPost from './ShowPost';


const Media = () => {

     const [loading2, setLoading2] = useState();
     const { data: post = [], refetch } = useQuery({
          queryKey: ['post'],
          queryFn: async () => {
               setLoading2(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post');
               const data = await res.json();
               setLoading2(false)
               return data;

          }
     })
     return (

          <div className=' mt-14 lg:mt-0'>
               <main class="h-full w-full  grid grid-cols-1 px-2">
                    <div className='py-1 mt-1'>
                         {/* <h1 className='text-blue-500  font-bold text-center text-xl  '>Public Posts</h1> */}
                    </div>

                    {loading2 ? <div className='flex -mt-2  justify-center items-center flex-col'>
                         {/* spinner 1 */}
                         <div className="py-2 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px]  animate-pulse ">
                              <div className="flex p-1 space-x-4 sm:px-2">
                                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
                                   <div className="flex-1 py-2 space-y-4">
                                        <div className="w-2/4 h-2 rounded bg-gray-700"></div>
                                        <div className="w-1/3 h-2 rounded bg-gray-700"></div>
                                   </div>
                              </div>
                              <div className="p-2 space-y-4 sm:px-2">
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                                   <div className="w-full h-72 rounded bg-gray-700"></div>
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                              </div>
                         </div>
                         {/* spinner 2 */}
                         <div className="py-2 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                              <div className="flex p-1 space-x-4 sm:px-2">
                                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
                                   <div className="flex-1 py-2 space-y-4">
                                        <div className="w-2/4 h-2 rounded bg-gray-700"></div>
                                        <div className="w-1/3 h-2 rounded bg-gray-700"></div>
                                   </div>
                              </div>
                              <div className="p-2 space-y-4 sm:px-2">
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                                   <div className="w-full h-72 rounded bg-gray-700"></div>
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                              </div>
                         </div>
                         {/* spinner 3 */}
                         <div className="py-2 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                              <div className="flex p-1 space-x-4 sm:px-2">
                                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
                                   <div className="flex-1 py-2 space-y-4">
                                        <div className="w-2/4 h-2 rounded bg-gray-700"></div>
                                        <div className="w-1/3 h-2 rounded bg-gray-700"></div>
                                   </div>
                              </div>
                              <div className="p-2 space-y-4 sm:px-2">
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                                   <div className="w-full h-72 rounded bg-gray-700"></div>
                                   <div className="w-full h-2 rounded bg-gray-700"></div>
                              </div>
                         </div>
                    </div>
                         :
                         <>  {
                              post.map(publicPost => <ShowPost
                                   key={publicPost._id}
                                   refetch={refetch}
                                   setLoading2={setLoading2}
                                   publicPost={publicPost}
                              ></ShowPost>)
                         }</>
                    }
               </main>
          </div>

     );
};

export default Media;