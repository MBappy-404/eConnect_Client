

import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBriefcase, FaCheckCircle, FaComments, FaEnvelope, FaFacebook, FaFacebookMessenger, FaHouseUser, FaInstagram, FaPhone, FaTwitter, FaUserCircle, FaUserGraduate, FaUserPlus } from 'react-icons/fa'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import ShowPost from '../Media/ShowPost';

const ViewProfile = () => {

     const { loading, setLoading } = useState();
     const { updatedEmail, email, phone, work, _id, address, college, bio, like, twitter, updatedName, name, updatedPhoto, photo, instagram, facebook, } = useLoaderData();
     const [follow, setFollow] = useState(like ? like : 0)



     const handleMessageSend = () => {
          document.getElementById('message').value = ''
          toast.success('Request Send')
     }

     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://e-somaz-server.vercel.app/users');
               const data = await res.json();
               return data;


          }
     })


     const [post, setPost] = useState([]);

     useEffect(() => {

          fetch('https://e-somaz-server.vercel.app/post')
               .then(response => response.json())
               .then(data => setPost(data));

     }, [post]);




     const handleFollow = (id) => {
          // console.log(id);
          fetch(`https://e-somaz-server.vercel.app/user/${id}`, {
               method: 'PUT'
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                         setFollow(follow + 1)
                         //disabled follow button
                         toast.success(`Started Following '${updatedName ? updatedName : name}'`)
                         document.getElementById(id).disabled = "true"
                         document.getElementById(id).style.backgroundColor = "#0080FE"
                         document.getElementById(id).innerText = "Following"
                         document.getElementById(id).style.color = "white"

                         //  console.log(id);

                    }
               })
     }



     return (
          <div>
               <div className=' pb-36 lg:pb-0'>
                    <div class="w-full relative mx-auto rounded-xl  md:w-[750px] lg:w-[550px] mt-4  overflow-hidden">

                         <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
                              <img src="https://cdn.wallpapersafari.com/90/27/ZUrPsL.jpg" alt="img" class=" w-full h-full object-cover object-center absolute z-0" />
                              <div class="flex flex-col cursor-pointer justify-center items-center relative  h-full mt-14 md:mt-0   text-white">
                                   {/* user photo  */}
                                   {
                                        !updatedPhoto && !photo ? <img class="h-24 ring-4 ring-blue-500 w-24 object-cover rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                             {
                                                  updatedPhoto ?
                                                       <PhotoProvider>
                                                            <PhotoView src={updatedPhoto}>
                                                                 <img class="h-24 w-24 ring-4 ring-blue-500 object-cover rounded-full" src={updatedPhoto} alt="img" />
                                                            </PhotoView>
                                                       </PhotoProvider>
                                                       :
                                                       <PhotoProvider>
                                                            <PhotoView src={photo}>
                                                                 <img class="h-24 w-24 object-cover ring-4 ring-blue-500 rounded-full" src={photo} alt='img' />
                                                            </PhotoView>
                                                       </PhotoProvider>
                                             }</>
                                   }
                                   <h1 class="md:text-2xl text-xl  mt-1 font-semibold">
                                        {updatedName ? updatedName : name}
                                        {email === "sadikulsad0810@gmail.com" && <FaCheckCircle className='inline w-5 h-5 ml-1 text-blue-500' />}
                                   </h1>
                                   <h4 class="text-sm font-semibold">Joined Since '23</h4>
                              </div>
                         </div>
                         <div class="grid grid-cols-12 bg-white ">
                              <div class="col-span-12 w-full px-3 py-5 md:py-0 md:pb-4 items-center justify-between flex border-b border-solid content-center">
                                   <p className='font-semibold mt-0 md:mt-4'>Followers: {follow}</p>

                                   <div className='mt-0 md:mt-4'>
                                        <button
                                             id={_id}
                                             onClick={() => handleFollow(_id)}
                                             class="text-sm group cursor-pointer transition-colors group  p-2 bg-indigo-200 text-center mr-3 rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                                             Follow
                                             <FaUserPlus className='w-4 h-3 text-gray-500 inline ml-2 transition-colors group-hover:text-white mb-1' />
                                        </button>
                                        <label htmlFor="my-modal-6" class="text-sm group cursor-pointer  transition-colors group  p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">
                                             Message
                                             <FaFacebookMessenger className='w-4 h-4 text-gray-500 inline ml-2 transition-colors group-hover:text-white mb-1' />
                                        </label>
                                   </div>

                                   {/*Message request*/}
                                   <input type="checkbox" id="my-modal-6" className="modal-toggle" />

                                   <div className="modal">
                                        <div className="modal-box">
                                             <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                             <div className="rounded-lg">
                                                  <form>
                                                       <div className="mb-4">
                                                            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                                                                 Message
                                                                 <FaComments className='w-4 h-4 text-gray-500 inline ml-2 ' />
                                                            </label>
                                                            <textarea
                                                                 id='message'
                                                                 className="w-full px-3 py-2 border-gray-400 border rounded focus:outline-none"
                                                                 placeholder='Write your message'
                                                                 name='message'
                                                                 rows="4"
                                                                 required
                                                            ></textarea>
                                                       </div>
                                                  </form>
                                             </div>
                                             <div className="modal-action">
                                                  <label

                                                       onClick={handleMessageSend}
                                                       htmlFor="my-modal-6"
                                                       className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium px-4 py-2 rounded focus:outline-none focus:ring"
                                                  >
                                                       Send Message Request
                                                  </label>
                                             </div>
                                        </div>
                                   </div>


                              </div>
                              <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                                   <div class="px-4 pt-4">
                                        <form class="flex flex-col space-y-8">
                                             <div>
                                                  {/* intro  */}
                                                  {bio &&
                                                       <div>
                                                            <div>
                                                                 <h3 class="md:text-2xl text-xl  font-semibold mb-2">Bio</h3>
                                                                 <hr />
                                                            </div>
                                                            <div class="form-item w-full py-5">
                                                                 <label class="text-xl "></label>
                                                                 <p class="w-full   rounded  py-1 px-2 mr-2" >{bio}</p>
                                                            </div>
                                                       </div>}
                                                  {/* basic info  */}
                                                  <div>
                                                       <h3 class="md:text-2xl text-xl  font-semibold mb-2">Basic Information</h3>
                                                       <hr />
                                                  </div>
                                                  <div className='py-2 grid grid-cols-1 content-center space-y-3'>
                                                       <p> <FaUserCircle className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Name: {updatedName ? <span className='font-semibold'>{updatedName}</span> : <span className='font-semibold'>{name}</span>} </p>

                                                       <p> <FaEnvelope className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Email: {updatedEmail ? <span className='font-semibold'>{updatedEmail}</span> : <span className='font-semibold'>{email}</span>} </p>

                                                       {phone && <p> <FaPhone className='w-5 text-gray-400 h-5 inline mr-2 mb-1' />Phone: <span className='font-semibold'>{phone ? phone : ""}</span> </p>}

                                                       {work && <p> <FaBriefcase className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Work: <span className='font-semibold'> {work}</span></p>}

                                                       {college && <p> <FaUserGraduate className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Studies: <span className='font-semibold'>{college}</span></p>}

                                                       {address && <p> <FaHouseUser className='w-5 text-gray-400 h-5 inline mr-1 mb-1' /> Address: <span className='font-semibold'>{address}</span></p>}
                                                       {
                                                            twitter && <p> <FaTwitter className='w-5 h-5 inline  text-gray-400 ' /> <a href={twitter} className='font-medium  inline text-blue-400 ml-1 hover:underline ' target='_blank '>Twitter.com</a>
                                                            </p>
                                                       }
                                                       {
                                                            instagram && <p> <FaInstagram className='w-5 h-5 inline  text-gray-400 ' /> <a href={instagram} className='font-medium inline text-blue-400 ml-1 hover:underline ' target='_blank '>Instagram.com</a></p>
                                                       }
                                                       {
                                                            facebook && <p> <FaFacebook className='w-5 h-5 inline  text-gray-400' /> <a href={facebook} className='font-medium inline text-blue-400 ml-1 hover:underline ' target='_blank '>Facebook.com</a></p>
                                                       }
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                                   <div>
                                        <main class="h-full w-full  grid grid-cols-1 px-2">
                                             <div>

                                                  {
                                                       post.filter(userEmail => { return userEmail.userEmail === email }).length === 0
                                                            ? <div><p className='text-xl font-semibold mt-8 text-center '>
                                                                 No post available</p> </div> : <h1 className='  mt-5 ml-3 font-semibold  text-left md:text-2xl text-xl '>Posts</h1>
                                                  }
                                             </div>
                                             {loading && post?.length ? <div className='flex   justify-center items-center flex-col'>
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
                                                       post.filter(userEmail => { return userEmail.userEmail === email }).map(publicPost => <ShowPost
                                                            key={publicPost._id}
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
          </div>
     );
};

export default ViewProfile;