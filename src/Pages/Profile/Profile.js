import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import Activity from './Activity';

const Profile = () => {

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState();
  const { data: post = [], refetch } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch('https://e-somaz-server.vercel.app/post');
      const data = await res.json();
      setLoading(false)
      return data;

    }
  })

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch('https://e-somaz-server.vercel.app/users');
      const data = await res.json();
      return data;

    }
  })

  return (
    <div>

      <div class="w-full relative  px-3   md:px-10 pt-1 overflow-hidden">
        <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
          <img src={user?.photoURL} alt="" class="bg w-full h-full object-cover object-center absolute z-0" />
          <div class="flex flex-col justify-center items-center relative h-full  bg-opacity-50 text-white">
            <img src={user?.photoURL} class="h-24 w-24 object-cover rounded-full" alt='img' />
            <h1 class="text-2xl font-semibold">{user?.displayName}</h1>
            {/* <h4 class="text-sm font-semibold">Joined Since '19</h4> */}
          </div>
        </div>
        <div class="grid grid-cols-12 bg-white ">

          <div class="col-span-12 w-full px-3 py-6 items-center justify-between md:px-10 flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4     ">
            {
              users.filter(users => { return users.email === user?.email }).map(user => <p className='font-bold mt-0 md:mt-4'>Followers: {user.like}</p>)
            }
            <label htmlFor="my-modal-6" class="text-sm cursor-pointer p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"><Link to='/about'>Edit Profile</Link></label>
          </div>
          <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div class="px-4 pt-4">
              <form action="#" class="flex flex-col space-y-8">

                <div>
                  <h3 class="text-2xl font-semibold mb-2">Basic Information</h3>
                  <hr />
                </div>

                <div class="form-item">
                  <label class="text-xl ">Name :</label>
                  <input type="text" value={user?.displayName} class="w-60 ml-3 bg-gray-200  rounded  py-1 px-2  mr-2 " disabled />
                </div>



                <div class="form-item w-full">
                  <label class="text-xl ">Username :</label>
                  <input type="text" value={user?.displayName} class="w-60 ml-3 bg-gray-200  py-1 px-2 mr-2  rounded  " disabled />
                </div>

                <div class="form-item w-full">
                  <label class="text-xl ">Email :</label>
                  <input type="text" value={user?.email} class="w-60 ml-3 bg-gray-200 rounded py-1 px-2 mr-2  " disabled />
                </div>


                <div>
                  <h3 class="text-2xl font-semibold mb-2">Bio</h3>
                  <hr />
                </div>

                <div class="form-item w-full">
                  <label class="text-xl "></label>
                  <textarea cols="30" rows="10" class="w-full bg-gray-200 rounded  py-1 px-2 mr-2" disabled >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
                </div>

                <div>
                  <h3 class="text-2xl font-semibold mb-2">My Social Media</h3>
                  <hr />
                </div>

                <div class="form-item">
                  <label class="text-xl ">Instagram</label>
                  <input type="text" value="https://instagram.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                </div>
                <div class="form-item">
                  <label class="text-xl ">Facebook</label>
                  <input type="text" value="https://facebook.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled />
                </div>
                <div class="form-item">
                  <label class="text-xl ">Twitter</label>
                  <input type="text" value="https://twitter.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled />
                </div>
              </form>
            </div>
            {/* recent activity */}
            <div>
              <main class="h-full w-full  grid grid-cols-1 px-2">
                <div>
                  <h1 className='  mt-5 ml-3 font-semibold  text-left text-2xl'>My Posts</h1>
                  {
                    post.filter(userEmail => { return userEmail.userEmail === user?.email }).length === 0
                    && <div><p className='text-xl font-semibold mt-8 text-center '>
                      No post available <span className='text-sm text-blue-500  underline'><Link to='/createPost'>Create Now</Link></span> </p> </div>
                  }
                </div>

                {loading ? <div className='flex   justify-center items-center flex-col'>
                  {/* spinner 1 */}
                  <div className="py-4 ml-0 md:ml-4 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  {/* spinner 2 */}
                  <div className="py-4 ml-0 md:ml-4 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  {/* spinner 3 */}
                  <div className="py-4 ml-0 md:ml-4 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  <>  {
                    post.filter(userEmail => { return userEmail.userEmail === user?.email }).map(publicPost => <Activity
                      key={publicPost._id}
                      refetch={refetch}
                      setLoading={setLoading}
                      publicPost={publicPost}
                    ></Activity>)
                  }</>
                }
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;