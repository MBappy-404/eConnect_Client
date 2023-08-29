import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import { FaBriefcase, FaCheckCircle, FaEnvelope, FaFacebook, FaHouseUser, FaInstagram, FaPen, FaPhone, FaTwitter, FaUserCircle, FaUserGraduate } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ShowPost from '../Media/ShowPost';
 

const Profile = () => {

  const { user } = useContext(AuthContext);
  const [loading2, setLoading2] = useState();

  const { data: post = [], refetch } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      setLoading2(true)
      const res = await fetch('https://e-somaz-server.vercel.app/post');
      const data = await res.json();
      setLoading2(false)
      return data;

    }
  })

  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://e-somaz-server.vercel.app/users');
      const data = await res.json();
      return data;

    }
  })

  return (
    <div>
      <div className="w-full relative mx-auto rounded-xl   md:w-[750px] lg:w-[520px] 2xl:w-[600px]  mt-4  overflow-hidden">
        {
          users.filter(users => { return users.email === user?.email }).map(eUser =>
            <div className="top h-64 w-full bg-blue-600 overflow-hidden relative" key={eUser._id}>
              <img src="https://cdn.wallpapersafari.com/90/27/ZUrPsL.jpg" alt="" className=" w-full h-full object-cover object-center absolute z-0" />
              <div className="flex flex-col justify-center items-center relative  h-full mt-14 md:mt-0   text-white">
                {/* user photo  */}
                {
                  !eUser.updatedPhoto && !eUser.photo ? <img className="h-24 w-24 ring-4 ring-blue-500 object-cover rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                    {
                      eUser.updatedPhoto ?
                        <PhotoProvider>
                          <PhotoView src={eUser.updatedPhoto}>
                            <img className="h-24 w-24 ring-4 ring-blue-500 object-cover cursor-pointer rounded-full" src={eUser.updatedPhoto} alt="img" />
                          </PhotoView>
                        </PhotoProvider>
                        : <img className="h-24 w-24 ring-4 ring-blue-500 object-cover rounded-full" src={eUser.photo} alt='img' />
                    }</>
                }
                <h1 className="md:text-2xl text-xl  mt-1 font-semibold">
                  {eUser.updatedName ? eUser.updatedName : eUser.name} {eUser.email === "sadikulsad0810@gmail.com" && <FaCheckCircle className='inline w-5 h-5 ml-1 text-blue-500'/>}
                </h1>
                <h4 className="text-sm font-semibold">Joined Since '23</h4>
              </div>
            </div>)
        }

        <div className="grid grid-cols-12 bg-white ">
          <div className="col-span-12 w-full px-3 py-5 md:py-0 md:pb-4 items-center justify-between flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4">
            {
              users.filter(users => { return users.email === user?.email }).map(user => <p key={user._id} className='font-semibold mt-0 md:mt-4'>Followers: {user.like}</p>)
            }
            <label className="text-sm cursor-pointer transition-colors group  p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"><Link to='/about'>Edit Profile <FaPen className='w-3 h-3 mb-2 ml-0.5 inline text-gray-600 group-hover:text-white transition-colors' /></Link></label>
          </div>
          <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div className="px-4 pt-4">
              <form className="flex flex-col space-y-8">
                {
                  users.filter(users => { return users.email === user?.email }).map(eUser =>
                    <>
                      <div key={eUser._id}>
                        {/* intro  */}
                        {eUser.bio &&
                          <div>
                            <div>
                              <h3 className="md:text-2xl text-xl  font-semibold mb-2">Bio</h3>
                              <hr />
                            </div>
                            <div className="form-item w-full py-5">
                              <label className="text-xl "></label>
                              <p className="w-full   rounded  py-1 px-2 mr-2" >{eUser.bio}</p>
                            </div>
                          </div>}
                        {/* basic info  */}
                        <div>
                          <h3 className="md:text-2xl text-xl  font-semibold mb-2">Basic Information</h3>
                          <hr />
                        </div>
                        <div className='py-2 grid grid-cols-1 content-center space-y-3'>
                          <p> <FaUserCircle className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Name: {eUser.updatedName ? <span className='font-semibold'>{eUser.updatedName}</span> : <span>{user?.displayName}</span>} </p>

                          <p> <FaEnvelope className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Email: {eUser.updatedEmail ? <span className='font-semibold'>{eUser.updatedEmail}</span> : <span>{user?.email}</span>} </p>

                          {eUser.phone && <p> <FaPhone className='w-5 text-gray-400 h-5 inline mr-2 mb-1' />Phone: <span className='font-semibold'>{eUser.phone ? eUser.phone : ""}</span> </p>}

                          {eUser.work && <p> <FaBriefcase className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Work/Company: <span className='font-semibold'> {eUser.work}</span></p>}

                          {eUser.college && <p> <FaUserGraduate className='w-5 text-gray-400 h-5  inline mr-1 mb-1' /> College/University: <span className='font-semibold'>{eUser.college}</span></p>}

                          {eUser.address && <p> <FaHouseUser className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Address: <span className='font-semibold'>{eUser.address}</span></p>}
                          {
                            eUser.twitter && <p> <FaTwitter className='w-5 h-5 inline  text-gray-400 ' /> <a href={eUser.twitter} className='font-medium  inline text-blue-400 ml-1 hover:underline ' target='_blank '>Twitter.com</a>
                            </p>
                          }
                          {
                            eUser.instagram && <p> <FaInstagram className='w-5 h-5 inline  text-gray-400 ' /> <a href={eUser.instagram} className='font-medium inline text-blue-400 ml-1 hover:underline ' target='_blank '>Instagram.com</a></p>
                          }
                          {
                            eUser.facebook && <p> <FaFacebook className='w-5 h-5 inline  text-gray-400' /> <a href={eUser.facebook} className='font-medium inline text-blue-400 ml-1 hover:underline ' target='_blank '>Facebook.com</a></p>
                          }
                        </div>
                      </div>
                    </>
                  )
                }

              </form>
            </div>
            {/* recent activity */}
            <div>
              <main className="h-full w-full  grid grid-cols-1 px-2">
                <div>
                  {
                     post?.filter(userEmail => { return userEmail.userEmail === user?.email }).length ? <h1 className='  mt-5 ml-3 font-semibold  text-left md:text-2xl text-xl '> My Posts</h1> : ' '
                  }
                  {
                    post.filter(userEmail => { return userEmail.userEmail === user?.email }).length === 0
                    && <div><p className='text-xl font-semibold mt-8 text-center '>
                      No post available <span className='text-sm text-blue-500 animate-pulse  underline'><Link to='/createPost'>Create Now</Link></span> </p> </div>
                  }
                </div>
                {loading2 ? <div className='flex   justify-center items-center flex-col'>
                  {/* spinner 1 */}
                  <div className="py-2 ml-0 lg:ml-16 md:ml-24 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  {/* spinner 2 */}
                  <div className="py-2 ml-0 lg:ml-16 md:ml-24 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  {/* spinner 3 */}
                  <div className="py-2 ml-0 lg:ml-16 md:ml-24 rounded-2xl mt-4 shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] animate-pulse ">
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
                  <>  {
                    post.filter(userEmail => { return userEmail.userEmail === user?.email }).map(publicPost => <ShowPost
                      key={publicPost._id}
                      refetch={refetch}
                      setLoading2={setLoading2}
                      publicPost={publicPost}
                    ></ShowPost>)
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