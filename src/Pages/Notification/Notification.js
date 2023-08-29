import { useQuery } from '@tanstack/react-query';
import React from 'react';
import moment from 'moment/moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Notification = () => {
  
  const [loading, setLoading] = useState();

  const { data: post = [] } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch('https://e-somaz-server.vercel.app/post');
      const data = await res.json();
      setLoading(false)
      return data;

    }
  })

  return (
    <div className='py-4 px-2 mt-16 lg:mt-1'>
      {/* <!-- component --> */}
      {/* <!-- start: Social Network notification:light --> */}
      <div className='flex justify-center'>
        <div className="bg-white  px-2 py-3.5 rounded-xl shadow hover:shadow-xl w-full md:w-[750px] lg:w-[500px] 2xl:w-[600px] ">
          <div className=" flex items-center justify-between">
            <span className="font-bold text-xl text-slate-600 mb-3">Notifications</span>
          </div>
          <span className='w-full block h-[1px] bg-gray-200 mb-3'></span>
          {loading ? <div className='mb-3'>
            {/* spinner  */}
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">

                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">

                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">

                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">

                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-750px lg:w-[450px]  p-1 mt-5  mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="rounded-full bg-slate-700 h-10 w-10 md:w-14 md:h-14"></div>
                <div className="flex-1 space-y-3 py-1">
                  <div className="h-2 bg-slate-700 rounded w-48 md:w-72"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-1 w-40 md:w-60"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded col-span-1 w-36 md:w-48"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            :

            <>   {
              post.map(publicPost => <Link key={publicPost._id} to={`/postDetails/${publicPost._id}`}> <div className="flex   items-center mt-2 hover:bg-gray-200  pl-2 rounded-lg px-1 py-1 md:pl-5 cursor-pointer">
                <div className="relative flex flex-shrink-0 items-end">
                  {publicPost.postUserPhoto ? <> <img className="h-14 w-14 object-cover border rounded-full" src={publicPost.postUserPhoto} alt='' /></> : <> <img className="h-14 w-14 object-cover rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='' /> </>}

                </div>
                <div className="ml-3">
                  <span className="font-bold tracking-tight text-sm">{publicPost.postUser}</span>
                  <span className="text-xs ml-2 leading-none font-semibold text-gray-500 ">

                    {publicPost.image ? 'Add a photo' : 'Write a post'}

                  </span>
                  {publicPost.post && publicPost.post.length > 15 ? <p className="text-sm leading-4  italic opacity-70">{publicPost.post.slice(0, 15)}...</p> :  <p className="text-sm leading-4  italic opacity-70">{publicPost.post}</p>}
                  <span className="text-[10px] block text-blue-600 font-medium leading-4"> {moment(`${publicPost.time}`).fromNow()}</span>
                </div>
              </div> </Link>)
            }</>
          }
        </div>
      </div>
    </div>
  );
};

export default Notification;