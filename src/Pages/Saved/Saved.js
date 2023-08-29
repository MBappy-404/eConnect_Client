import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import ShowSaved from './ShowSaved';

const Saved = () => {

     window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
     });

     const { user } = useContext(AuthContext);
     const [loading, setLoading] = useState(false)

     const { data: savedPost = [], refetch } = useQuery({
          queryKey: ['saved'],

          queryFn: async () => {
               setLoading(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post/saved');
               const data = await res.json();
               setLoading(false)
               return data;

          }

     })

     // saved user
     let saved = savedPost.filter((elem) => { return elem.savedUser?.some((ele) => { return ele.savedEmail === user?.email }) }).map(post => post.savedUser)

     return (
          <div className='py-10 px-2 md:px-0'>

               {
                    saved.length ?
                         <h1 className='text-blue-500 pt-10   lg:pt-0 lg:-mt-5 font-bold text-center text-xl'>Saved Posts</h1> :
                         <div className="flex items-center px-2  pb-56 mt-10 md:mt-0 2xl:pb-80  justify-center">
                              <div className="bg-white p-10 rounded-lg  shadow-md max-w-md">
                                   <img src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=740&t=st=1692900954~exp=1692901554~hmac=972e4fc773508df0d615630b0a1396ba7306e56df86910bf27d15084a9e4e583' alt="Congrats Illustration" className="mx-auto w-72" />
                                   <h1 className="text-xl font-bold text-center mt-4">No saved!</h1>
                                   <p className="text-gray-700 text-center mt-2">
                                        You didn't save any post!
                                   </p>
                              </div>
                         </div>
               }

               {
                    saved?.length && loading ?

                         // spinner 
                         <div className='mb-20 flex justify-center'>
                              <div className="py-2 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                                   <div className="flex p-2 space-x-4 sm:px-2">
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
                         <>
                              {/* load data  */}
                              {
                                   savedPost.filter((elem) => { return elem.savedUser?.some((ele) => { return ele.savedEmail === user?.email }) }).reverse().map(saved => <ShowSaved
                                        key={saved._id}
                                        setLoading={setLoading}
                                        saved={saved}
                                        refetch={refetch}
                                   ></ShowSaved>)
                              }
                         </>
               }
          </div>
     );
};

export default Saved;