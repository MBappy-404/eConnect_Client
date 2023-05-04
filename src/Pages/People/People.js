import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
 
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
           document.getElementById(id).innerText="Following"
           document.getElementById(id).style.backgroundColor="#0080FE"
           document.getElementById(id).style.color="white"
           
          //  console.log(id);

        }
      })
  }

  return (

    <div className='flex justify-center px-2 mt-20 md:mt-6'>
      <div class=' w-full   md:w-[750px] lg:w-[500px] bg-slate-200'>
        <div class='user-list w-full   mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4'>
          <div class=" flex items-center justify-between">
            <span class="font-bold text-xl text-slate-600 mb-3 ml-2">Peoples</span>

          </div>
          <span className='w-full block h-[1px] bg-gray-400 mb-3'></span>
          {/* <!--User row --> */}
          {
            loading ? <div className='mb-40 px-2'>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border w-full md:w-750px lg:w-[450px]  shadow rounded-md p-4 mt-5  mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded w-48"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-1 w-48"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              :

              <>
                {
                  users?.map(user => <div class="user-row flex   items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4   hover:bg-gray-100">
                    <div class="user flex items-center  text-left justify-between">
                      <div class="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">

                        {user.photo ? <> <img class="avatar w-16 h-16 rounded-full" src={user.photo} alt="user" /></> : <><img class="avatar w-14 h-14 md:w-16 md:h-16  rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /></>}
                      </div>
                      <div class="user-body ml-2 flex flex-col mb-4 sm:mb-0 sm:mr-4">
                        <a href="#" class="title font-medium no-underline">{user.name}</a>
                        <div class="skills flex flex-col">
                          <span class="subtitle text-slate-500">Followers:
                            {user.like ? <span className='font-semibold  text-gray-800 ml-1'>{user.like}</span> : <span className='ml-1'> 0</span> }
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* <!--Button content --> */}
                    <div class="user-option sm:mr-0">
                      <button id={user._id}   onClick={() => handleFollow(user._id)} class="btn btn-sm inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap   rounded text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300" type="button">Follow</button>
                    </div>
                    {/* <!--Close Button content --> */}
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