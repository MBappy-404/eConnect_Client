import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import './CreateStory.css'
import { Watch } from 'react-loader-spinner';

const CreateStory = () => {

     const { user } = useContext(AuthContext);
     return (
          <div className='pt-20 md:pt-10  pb-20 md:pb-44'>

               <div class="heading text-center text-xl text-blue-500 mt-0 md:mt-10  lg:mt-0  mb-10 font-bold md:text-2xl  ">Create Story</div>

               <div class="flex flex-col px-2 md:px-3     bg-center bg-cover bg-no-repeat ">
                    <div
                         class="grid   w-full   md:w-[750px] lg:w-[500px] bg-[#FFFFFF] place-items-center   mx-auto p-10 my-10 sm:my-auto bg-white-600 border-4 border-indigo-600  rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
                         {/* spinner  */}
                         {/* <Watch
                              height="80"
                              width="80"
                              radius="48"
                              color="blue"
                              ariaLabel="watch-loading"
                              wrapperStyle={{}}
                              wrapperClassName=""
                              visible={true}
                         /> */}
                          <img src="https://cdn.dribbble.com/users/2344801/screenshots/4774578/alphatestersanimation2.gif" alt="" />
                         <h1 class="text-3xl font-bold uppercase text-indigo-600 transition duration-500">Available Soon</h1>


                    </div>
               </div>

              
          </div>
     );
};

export default CreateStory;