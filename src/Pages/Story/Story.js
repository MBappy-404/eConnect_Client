import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import { Link } from 'react-router-dom';

const Story = () => {

  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ?
        <>
          <div className='flex justify-center px-2'>
            <div className=' bg-white w-full lg:w-[500px] md:w-[750px] mt-5 md:mx-0  rounded-xl m-auto'>
              <div><h1 className='text-xl text-gray-500 font-semibold mb-2 ml-2 mt-2'>Stories</h1></div>
              <span className='w-full block h-[1px] mb-3 bg-gray-300'></span>
              <div class="flex space-x-2 mx-auto max-w-2xl p-2 relative">
                <Link to='/createStory'  class="w-28 h-52 md:w-36 md:h-52  rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
                  {user && user.photoURL ? <> <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={user?.photoURL} alt="img" /></> :
                    <> <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" /></>}

              
                <div class="bg-gray-800 relative flex-1 flex flex-col">
                    <div class="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4">
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
                </Link>
                <div class="  w-28 h-52 md:w-36 md:h-52  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">


                  {user && user.photoURL ? <> <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={user?.photoURL} alt="img" /></> :
                    <> <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" /></>}

                  <div class="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                    {user && user.photoURL ? <> <img class="w-full h-full object-cover" src={user?.photoURL} alt="img" /></> :
                      <> <img class="w-full h-full object-cover" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" /></>}
                  </div>

                  <div class="absolute inset-x-3 bottom-1">
                    <p class="text-white font-semibold">Your Story</p>
                  </div>

                  <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

                </div>

                <div class=" w-28 h-52 md:w-36 md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                  <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="img" />

                  <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                    <img class="w-full h-full object-cover" src="https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg" alt="img" />
                  </div>

                  <div class="absolute inset-x-3 bottom-1">
                    <p class="text-white font-semibold">Baky Billah</p>
                  </div>

                  <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

                </div>
                <div class=" w-28 h-52 md:w-36 hidden md:block md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                  <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://t3.ftcdn.net/jpg/05/24/30/02/360_F_524300228_egMskw0zvvdwNUFPeJLlplclKzFamXBk.jpg" alt="img" />

                  <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                    <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="img" />
                  </div>

                  <div class="absolute inset-x-3 bottom-1">
                    <p class="text-white font-semibold">Jackness</p>
                  </div>
                  <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

                </div>
                <div class=" w-28 h-52 md:w-36 hidden sm:block md:block lg:hidden md:h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                  <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=3" alt="img" />

                  <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                    <img class="w-full h-full object-cover" src="https://picsum.photos/200/300?random=4" alt="img" />
                  </div>

                  <div class="absolute inset-x-3 bottom-1">
                    <p class="text-white font-semibold">Jackness</p>
                  </div>

                  <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                </div>
            
              </div>
            </div>
          </div>
        </> : ''}
    </div>
  );
};

export default Story;