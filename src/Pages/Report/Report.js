import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import ShowReport from './ShowReport';

const Report = () => {

     const { user } = useContext(AuthContext);
     const [loading, setLoading] = useState(false)

     const { data: reportPost = [], refetch } = useQuery({
          queryKey: ['report'],

          queryFn: async () => {
               setLoading(true)
               const res = await fetch('https://e-somaz-server.vercel.app/post/report');
               const data = await res.json();
               setLoading(false)
               return data;

          }

     })

     // reported user 
     let report = reportPost?.filter((elem) => { return elem.Reports?.some((ele) => { return ele?.postMail === user?.email }) }).map(reports => reports?.Reports)
     // console.log(report);
     return (
          <div className='py-10 px-2'>

               {
                    report?.length ?
                         <h1 className='text-blue-500 pt-10  lg:pt-0 lg:-mt-5 font-bold text-center text-xl'>Reported Posts</h1> :
                         <div className="flex items-center justify-center px-2 pb-56 mt-10 md:mt-0 2xl:pb-80">
                              <div className="bg-white p-10 rounded-lg shadow-md max-w-md">
                                   <img src='https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg?w=740&t=st=1692899811~exp=1692900411~hmac=712f0905b6c255073da0a17ce239bda2f2ce8f818e0df18abffd9114f27f83e1' alt="Congrats Illustration" className="mx-auto w-72" />
                                   <h1 className="text-xl font-bold text-center mt-4">Congratulations!</h1>
                                   <p className="text-gray-700 text-center mt-2">
                                        No restrictions any post !
                                   </p>
                              </div>
                         </div>
               }

               {
                    loading && report?.length ?

                         <div className='mb-20 flex justify-center'>
                              <div className="py-2 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
                                   <div className="flex p-2 space-x-4 sm:px-2">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-700"></div>
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
                              {
                                   reportPost.filter((elem) => { return elem.Reports?.some((ele) => { return ele.postMail === user?.email }) }).reverse().map(report => <ShowReport
                                        key={report._id}
                                        report={report}
                                        setLoading={setLoading}
                                        refetch={refetch}
                                   ></ShowReport>)
                              }
                         </>
               }
          </div>
     );
};

export default Report;