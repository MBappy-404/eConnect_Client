import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import ShowReport from './ShowReport';

const Report = () => {
     const {user} = useContext(AuthContext);
     const [loading, setLoading] = useState(false)

     const { data: reportPost= [], refetch } = useQuery({
          queryKey: ['report'],
       
          queryFn: async () => {
               setLoading(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post/report');
               const data = await res.json();
               setLoading(false)
               return data;
               
          }

     })
     return (
          <div className='py-10'>
               <h1 className='text-blue-500  font-bold text-center text-xl'>  Reported Posts</h1>

               {
               loading ? 

               <div className='mb-20 flex justify-center'>

                  <div className="py-4 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
                  	<div className="flex p-4 space-x-4 sm:px-8">
                  		<div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
                  		<div className="flex-1 py-2 space-y-4">
                  			<div className="w-2/4 h-2 rounded dark:bg-gray-700"></div>
                  			<div className="w-1/3 h-2 rounded dark:bg-gray-700"></div>
                  		</div>
                  	</div>
                  	<div className="p-4 space-y-4 sm:px-8">
                  		<div className="w-full h-2 rounded dark:bg-gray-700"></div>
                  		<div className="w-full h-72 rounded dark:bg-gray-700"></div>
                  		<div className="w-full h-2 rounded dark:bg-gray-700"></div>
                  	</div>
                  </div>
              
               
              </div>
               
                
              
               :
               <>
               {
                     reportPost.filter((elem) => { return elem.Reports?.some((ele) => { return ele.postMail === user?.email})}).map(report => <ShowReport 
                     key={report._id}
                     report={report}
                     refetch={refetch}
                     ></ShowReport> ) 
               }
               </>
            }
          </div>
     );
};

export default Report;