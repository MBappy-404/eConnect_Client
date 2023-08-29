import React from 'react';
import './Others.css'
import { FaAngleDoubleRight, FaBookOpen, FaCommentDots, FaDollarSign, FaShareAltSquare } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

const Others = () => {


  // posts 
  const { data: post = [] } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await fetch('https://e-somaz-server.vercel.app/post');
      const data = await res.json();
      return data;

    }
  })

  // users 
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://e-somaz-server.vercel.app/users');
      const data = await res.json();
      return data;

    }
  })

  // stories
  const { data: stories = [] } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const res = await fetch('https://e-somaz-server.vercel.app/story');
      const data = await res.json();
      return data;

    }
  })


  return (
    <div className='px-2 flex justify-center items-center md:px-0'>
      <div className=" bg-white  rounded-xl mt-20   md:mt-20 lg:mt-5 shadow-lg w-full  md:w-[750px] lg:w-[500px] 2xl:w-[600px]">

        <div className='py-4'>
          <span className="font-bold text-xl text-slate-600 ml-2">Others</span>
          <span className='w-full block h-[1px] bg-gray-200  mt-2'></span>
        </div>

        <div className=" mt-2 px-5 ">
          <p className="font-bold text-xl   text-slate-600 "> <FaAngleDoubleRight className='inline text-gray-500 w-5 h-5' /> Upcoming Features</p>
          <div className=" rounded-lg p-3 md:p-5">
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <FaShareAltSquare className='w-6 mt-1 h-6 inline text-blue-400 mr-4' />
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">Share any post</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Users can share any post on their profile.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <FaCommentDots className='w-6 mt-1 h-6 inline text-blue-400 mr-4' />
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">Send message request</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Send message requests to any user.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <FaDollarSign className='w-6 mt-1 h-6 inline text-blue-400 mr-4' />
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">Available earning option</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Enable earning categories.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <FaBookOpen className='w-6 mt-1 h-6 inline text-blue-400 mr-4' />
                  <div>
                    <h4 className="text-md font-semibold text-gray-600 mb-1">Optimize story view</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Upgrade story view system.</p>
                  </div>
                </div>
              </li>
            </ul>
            <p className='text-gray-500 ml-1 underline text-sm  py-3 '>All new features will be available on 2.0</p>
          </div>

          {/* statistics */}
          <div className='py-4'>
            <span className="font-bold text-xl text-slate-600"> <FaAngleDoubleRight className='inline text-gray-500 w-5 h-5' /> Real-time Statistics</span>
            <div className="grid md:grid-cols-2 mt-6 xl:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-5 border  hover:bg-gray-200  transition-color border-gray-200 shadow-lg rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full lg:mr-2 md:mr-24 ">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{users?.length}</span>
                  <span className="block text-gray-500">Total Users</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5 border  hover:bg-gray-200  transition-color border-gray-200 bg-white shadow-lg rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full ">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{post?.length}</span>
                  <span className="block text-gray-500">Total Posts</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5 border  hover:bg-gray-200  transition-color border-gray-200 bg-white shadow-lg rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full ">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">9</span>
                  <span className="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
                  <span className="block text-gray-500">Users Activity</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5 border  hover:bg-gray-200  transition-color border-gray-200 bg-white shadow-lg rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-400 bg-blue-100 rounded-full ">
                  <FaBookOpen className='w-6 h-6' />
                </div>
                <div>
                  <span className="block text-2xl font-bold">{stories?.length}</span>
                  <span className="block text-gray-500">Total Stories</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <!-- component --> */}
        <footer className="relative py-20 mt-8 rounded-b-xl  flex flex-col items-center bg-cyan-900 overflow-hidden">
          <div className="relative z-[1] w-full h-80 flex justify-center flex-col items-center container m-auto">
          <h2 className=" font-bold leading-tight relative  text-center hero glitch layers" data-text="eConnect"><span className="block">eConnect 2.0</span></h2>
            <h1 className='text-white font-extrabold text-center mt-4  text-xl'> Coming Soon...</h1>
         
          

          </div>
          <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
            <div aria-hidden="true" className="  w-72 h-56 m-auto    blur-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600  rounded-full    "></div>
          </div>
          <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
             
        </footer>
      </div>

    </div>
  );
};

export default Others;