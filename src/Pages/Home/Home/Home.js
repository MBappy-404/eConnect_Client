import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import { FaUserCircle } from 'react-icons/fa';
import ShowPost from '../../Media/ShowPost';
 

const Home = () => {
     const { user,loading, } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
    

     const {data: post = [], refetch  } = useQuery({
          queryKey:['post'],
          queryFn: async()=>{
               const res = await fetch('https://e-somaz-server.vercel.app/post');
               const data = await res.json();
               return data;
               
          }
     })

     

     const closeModal = () =>{
          document.getElementById('modal').style.display = 'none'
         
     }

     

     const handlePost = (data) => {

          
           
          const image = data.image[0];
          // console.log(image);
          const formData = new FormData();
          formData.append('image', image);
          // console.log(formData);
              
               fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
                    method: 'POST',
                    body: formData
               })
               .then(res => res.json())
               .then( imageData => {
                    // console.log(imageData);
                 if (imageData.success) {
                    //with image
               const Post = {
                    post: data?.post,
                    image: imageData.data.url,
                    postUser: user?.displayName,
                    like:0,
                    comment:'',
                    userEmail: user?.email,
                    postUserPhoto: user?.photoURL
               }
     
               fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                         'content-type': 'application/json',
                         
                    },
                    body: JSON.stringify(Post)
               })
               .then(res => res.json())
               .then( data => {
                    console.log(data);
                    navigate('/media')
                    
                    // toast.success('doctor add success')
                    // navigate('/dashboard/manageDoctor')
               })   
               }  
             })
             
             //without image

               // const Post = {
               //      post: data?.post,
               //      postUser: user?.displayName,
               //      like:0,
               //      comment:'',
               //      userEmail: user?.email,
               //      postUserPhoto: user?.photoURL
               // }
              
               // //Post  database

               // fetch('http://localhost:5000/post', {
               //      method: 'POST',
               //      headers: {
               //           'content-type': 'application/json',
                         
               //      },
               //      body: JSON.stringify(Post)
               // })
               // .then(res => res.json())
               // .then( data => {
               //      console.log(data);
               //      navigate('/media')
                    
               //      // toast.success('doctor add success')
               //      // navigate('/dashboard/manageDoctor')
               // })







     }
     return (
          <div>
               {/* <!-- component --> */}
               <div class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full h-full flex flex-col justify-between  border-r bg-white  md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                    <div>
                         <div class="mt-20 text-center">
                              <img src={user?.photoURL} alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                              <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user?.displayName}</h5>
                              <span class="hidden text-gray-400 lg:block">Admin</span>
                         </div>

                         <ul class="space-y-2   mt-8">
                              <li>
                                   <a href=" " aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600 hover:bg-gray-300 to-cyan-400">
                                       <FaUserCircle className='text-gray-400' ></FaUserCircle >
                                        <span class="-mr-1 font-medium"><Link to='/profile'>Profile</Link></span>
                                   </a>
                              </li>
                              <li>
                                   <Link class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Saved</span>
                                   </Link>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Reports</span>
                                   </a>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Other data</span>
                                   </a>
                              </li>
                              <li>
                                   <a href=" " class="px-4 hover:bg-gray-300 to-cyan-400 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                             <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                             <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="group-hover:text-gray-700">Finance</span>
                                   </a>
                              </li>
                         </ul>
                    </div>

                    <div class="px-6 -mx-6 pt-4 flex justify-between hover:bg-gray-300 to-cyan-400 items-center border-t">
                         <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              <span class="group-hover:text-gray-700">Logout</span>
                         </button>
                    </div>
               </div>
               <div class="ml-auto mb-6 mt-20 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                    <div class="sticky z-10 top-0 h-16 bg-white lg:py-2.5">
                         <div class="px-6 flex items-center justify-start    ">

                              <div class=" ">
                                   {/* <!--search bar --> */}


                                   <div className='flex mt-3 md:mt-3 lg:mt-0 '>
                                        <div>

                                             {/* The button to open modal */}
                                             <label htmlFor="my-modal"    className="btn btn-ghost mt-1 w-52 rounded-2xl btn-sm bg-gray-300 ">Create Post <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                             </svg></label>

                                             {/* Put this part before </body> tag */}
                                             <input type="checkbox" id="my-modal"   className="modal-toggle" />
                                             <div id='modal' className="modal">
                                                  <div className="modal-box">
                                                  <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                                                       <div class="flex justify-center items-center ">
                                                            <div class="container mx-auto  ">
                                                                 <div class="w-full">
                                                                      <div class="flex">
                                                                           <h1 class="font-bold  text-3xl">Create Your Post</h1>
                                                                      </div>

                                                                  
                                                                   <div class="my-4">
                                                                   <form  onSubmit={handleSubmit(handlePost)}>
                                                                           <textarea placeholder="Write something...." required 
                                                                            {...register("post", {
                                                                                
                                                                           })}
                                                                           class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea> <br />

                                                                      <div className='flex mt-4'>
                                                                      <label required htmlFor="icon-button-file"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="primary" aria-label="upload picture" component="span" class="text-3xl mr-2 cursor-pointer" className='w-10 h-10' xmlns="http://www.w3.org/2000/svg"><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path><path d="m12 12-1-1-2 3h10l-4-6z"></path></svg> </label>
                                                                     
                                                                     <p className='font-semibold mt-1 ml-2'>Attach Photos</p>
                                                                      </div>

 
                                                                           <input id="icon-button-file" type="file"
                                                                            {...register("image", {
                                                                                required: "image  is required"
                                                                           })}
                                                                             className="file-input hidden mt-2 file-input-bordered file-input-primary w-full max-w-xs" required /> <br /> <br />
                                                                       <label onClick={closeModal}  htmlFor="my-modal"> <input   id="my-modal" type='submit' value='Post'  className="btn"/> </label>
                                                                        

                                                                          

                                                                           </form>
                                                                      </div>
                                                                 </div>
                                                                
                                                            </div>
                                                       </div>
                                                       
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className=''>
           <main class="h-full w-full grid  grid-cols-1 px-2">
               
               {
                post.map(publicPost => <ShowPost
                key={publicPost._id}
                refetch={refetch}
                publicPost={publicPost}
                ></ShowPost>)
               }
                   
                     
      
                </main>
         </div>

         


          </div>
     );
};

export default Home;