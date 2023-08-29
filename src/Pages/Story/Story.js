import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaBookOpen } from 'react-icons/fa';
import './Story.css'

const Story = () => {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState()

  // get users 
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://e-somaz-server.vercel.app/users');
      const data = await res.json();
      return data;

    }
  })

  // get story 
  const { data: stories = [] } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch('https://e-somaz-server.vercel.app/story');
      const data = await res.json();
      setLoading(false)
      return data;

    }
  })
  return (
    <div>

      <div title='Swap Left <=> Right' className=' flex justify-center px-2'>
        <div className='bg-white w-full lg:w-[500px] md:w-[750px] 2xl:w-[600px] mt-5 md:mx-0  rounded-xl m-auto'>
          <div><h1 className='text-lg text-gray-500 font-semibold mb-2 ml-2 mt-2'><FaBookOpen className="w-5 mb-1 h-5 mr-1 text-gray-400 inline" /> Stories</h1></div>
          <span className='w-full block h-[1px] mb-1 bg-gray-300'></span>
          <div class="flex gap-1 mx-auto  p-2 relative">

            <Swiper
              slidesPerView={3}
              spaceBetween={2}
              className="mySwiper"
            >
              {
                loading ? <>
                  {/* spinner  */}
                  <SwiperSlide>
                    <div class="w-40 h-48 slider md:w-52 md:h-60  animate-pulse  border-1 border border-gray-200  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                      <div class="bg-gray-400 relative flex-1 sticky bottom-0 pb-1 flex flex-col">
                      </div>
                      <div class="absolute   transition duration-300 ease-in-out  "></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="w-40 h-48 slider md:w-52 md:h-60  animate-pulse  border-1 border border-gray-200  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                      <div class="bg-gray-400 relative flex-1 sticky bottom-0 pb-1 flex flex-col">
                      </div>
                      <div class="absolute   transition duration-300 ease-in-out  "></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="w-40 h-48 slider md:w-52 md:h-60  animate-pulse  border-1 border border-gray-200  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                      <div class="bg-gray-400 relative flex-1 sticky bottom-0 pb-1 flex flex-col">
                      </div>
                      <div class="absolute   transition duration-300 ease-in-out  "></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="w-40 h-48 slider md:w-52 md:h-60  animate-pulse  border-1 border border-gray-200  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                      <div class="bg-gray-400 relative flex-1 sticky bottom-0 pb-1 flex flex-col">
                      </div>
                      <div class="absolute   transition duration-300 ease-in-out  "></div>
                    </div>
                  </SwiperSlide></> :
                  <>

                    {/* create story  */}
                    <SwiperSlide >
                      <Link to='/createStory' class="w-40  h-48 md:w-52 md:h-60 block rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">

                        {
                          !user && <img class="w-full h-full object-cover" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' />
                        }
                        {
                          users.filter(users => { return users.email === user?.email }).map(eUser => <>
                            {
                              !eUser.updatedPhoto && !eUser.photo ? <img class="w-full h-full object-cover" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                {
                                  eUser.updatedPhoto ? <img class="w-full h-full object-cover" src={eUser.updatedPhoto} alt="img" /> : <img class="w-full h-full object-cover" src={eUser.photo} alt='img' />
                                }</>
                            }
                          </>)
                        }
                        <div class="bg-gray-600 relative sticky bottom-0 flex-1 pb-1 flex flex-col">
                          <div class="bg-blue-600 p-0.5 mt-1 rounded-full border-4 border-gray-600 absolute left-1/2 transform -translate-x-1/2 -translate-y-3/4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          <div class="flex-1 p-3 -mb-1  text-white text-sm  font-medium   flex justify-center items-end">
                            <p>
                              Create Story
                            </p>
                          </div>
                        </div>
                        <div class="absolute inset-0 bg-gray-700 opacity-0 transition duration-300 ease-in-out "></div>
                      </Link>
                    </SwiperSlide>

                    {/* load stories  */}
                    {
                      stories.slice(0).reverse().map(story =>

                        <SwiperSlide key={story._id}>
                          <div class="w-40 h-48 slider md:w-52 md:h-60  border-1 border border-gray-200  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                            <PhotoProvider>
                              <PhotoView src={story.image}>
                                <img src={story.image} alt="img" class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" />
                              </PhotoView>
                            </PhotoProvider>
                            <div class="w-6 h-6 md:w-8 md:h-8 border-4 box-content border-indigo-500 rounded-full overflow-hidden absolute left-1 top-3">
                              {
                                story.userPhoto ? <img src={story.userPhoto} alt="img" class="w-full h-full object-cover" /> :
                                  <img src="https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg" class="w-full h-full object-cover" alt="img" />
                              }
                            </div>
                            <div class="bg-gray-600 relative flex-1 sticky bottom-0   flex flex-col">
                              <div class="flex-1  text-white text-[11px] md:text-sm   flex justify-center items-end">
                                <p className='p-1'>
                                  {story.userName}
                                </p>
                              </div>
                            </div>
                            <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                          </div>
                        </SwiperSlide>
                      )
                    }
                  </>
              }
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Story;