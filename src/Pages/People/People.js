import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const People = () => {
  
  const [loading, setLoading] = useState()

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch('https://e-somaz-server.vercel.app/users');
      const data = await res.json();
      setLoading(false)
      return data;


    }
  })

  const handleFollow = (id) => {

    fetch(`https://e-somaz-server.vercel.app/user/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.acknowledged) {
          refetch()
          setLoading(false)
          //disabled follow button
          document.getElementById(id).disabled = "true"
          document.getElementById(id).style.backgroundColor = "#0080FE"
          document.getElementById(id).innerText = "Following"
          document.getElementById(id).style.color = "white"

          //  console.log(id);

        }
      })
  }

  return (

    <div className='flex justify-center px-2 mt-20 lg:mt-5'>
      <div className=' w-full   md:w-[750px] lg:w-[500px] 2xl:w-[600px] '>
        <div className='user-list w-full   mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
          <div className=" flex items-center justify-between">
            <span className="font-bold text-xl text-slate-600 mb-3 ml-2">Peoples</span>

          </div>
          {/* <span className='w-full block h-[1px] bg-gray-400 mb-3'></span> */}
          {/* <!--User row --> */}
          {
            loading ? <div className='mb-16 px-2 md:px-3 2xl:px-0 lg:px-0'>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
              <div className=" w-full md:w-750px lg:w-[450px] 2xl:w-[600px] 2xl:px-3   rounded-md mt-5   mx-auto">
                <div className="animate-pulse flex space-x-2 items-center">
                  <div className="rounded-full bg-slate-700 w-12 h-12 md:h-16 md:w-16"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-2 bg-slate-700 rounded w-48"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-1 w-36"></div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-500 w-20 h-9 hidden md:block rounded-lg'></div>
                </div>
              </div>
            </div>

              :

              <>
                {
                  users?.map(user => <div key={user._id} className="user-row flex items-center justify-between cursor-pointer border-t p-2 md:p-4 duration-300 sm:flex-row    ">
                    <div className="user flex items-center mt-3 md:mt-0  text-left justify-between">
                      <Link to={`/user/${user._id}`}>
                        <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-5.5">
                          {
                            !user.updatedPhoto && !user.photo ? <img className="avatar ring-1 ring-primary w-12 object-cover h-12 md:w-16 md:h-16  rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                              {
                                user.updatedPhoto ? <img className="avatar ring-1 ring-primary w-12 object-cover h-12 md:w-16 md:h-16 rounded-full" src={user.updatedPhoto} alt="img" /> : <img className="avatar ring-1 ring-primary w-12 object-cover h-12 md:w-16 md:h-16  rounded-full" src={user.photo} alt='img' />
                              }</>
                          }
                        </div>
                      </Link>

                      <div className="user-body ml-2 flex flex-col mb-4 sm:mb-0 sm:mr-4">
                        <Link to={`/user/${user._id}`}>
                          <span className="title font-medium hover:bg-gray-200 no-underline">{user.updatedName ? user.updatedName : user.name}
                            <span className=" text-sm font-semibold   md:text-base">{user.email === 'sadikulsad0810@gmail.com' ? <> <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : ""} </span>
                          </span>
                        </Link>
                        <div className="skills flex flex-col">
                          <span className="subtitle text-slate-500">Followers:
                            {user.like ? <span className='font-semibold  text-gray-800 ml-1'>{user.like}</span> : <span className='ml-1'> 0</span>}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!--Button--> */}
                    <div className="user-option">
                      <button id={user._id} onClick={() => handleFollow(user._id)} className="btn font-normal btn-sm inline-block select-none no-underline align-middle border-none cursor-pointer whitespace-nowrap   rounded text-sm   leading-6 tracking-tight text-white text-center -0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button"> Follow </button>
                    </div>
                  </div>
                  )
                }
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default People;