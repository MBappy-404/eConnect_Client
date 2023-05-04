import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import ShowSaved from './ShowSaved';

const Saved = () => {
     const {user} = useContext(AuthContext);
     const [loading, setLoading] = useState(false)

     const { data: savedPost= [], refetch } = useQuery({
          queryKey: ['saved'],
       
          queryFn: async () => {
               setLoading(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post/saved');
               const data = await res.json();
               setLoading(false)
               return data;
               
          }

     })
     return (
          <div className='py-10 px-2 md:px-0'>
               {
                     savedPost?.filter((elem) => { return elem?.savedUser?.some((ele) => { return ele?.savedEmail === user?.email})}) ? 
                    <h1 className='text-blue-500 pt-10 md:pt-0 font-bold text-center text-xl'>Saved Post</h1> : 
                    <h1 className='text-blue-500  font-bold text-center text-xl mt-20'>No Saved Available</h1>
                   
               }
                
                {
               loading ? 

               // spinner 
               <div className='mb-20 flex justify-center'>
                  <div className="py-4 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
                  	<div className="flex p-4 space-x-4 sm:px-8">
                  		<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-700"></div>
                  		<div className="flex-1 py-2 space-y-4">
                  			<div className="w-2/4 h-2 rounded bg-gray-700"></div>
                  			<div className="w-1/3 h-2 rounded bg-gray-700"></div>
                  		</div>
                  	</div>
                  	<div className="p-4 space-y-4 sm:px-8">
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
                     savedPost.filter((elem) => { return elem.savedUser?.some((ele) => { return ele.savedEmail === user?.email})}).map(saved => <ShowSaved 
                     key={saved._id}
                     setLoading={setLoading}
                     saved={saved}
                     refetch={refetch}
                     ></ShowSaved> ) 
               }
               </>
            }
          </div>
     );
};

export default Saved;