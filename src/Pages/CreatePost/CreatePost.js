import React from 'react';
import './CreatePost.css'
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';


const CreatePost = () => {
     const { user } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
     const [loading, setLoading] = useState()
     // const [loading2, setLoading2] = useState()

     // selected file preview 
     const handleImage = (e) => {
          let fileInput = document.getElementById('fileInput');
          let fileDisplayArea = document.getElementById('fileDisplayArea');
          let file = fileInput.files[0];
          console.log(file.name);
          let imageType = /image.*/;
          if (file.type.match(imageType)) {
               let reader = new FileReader();
               reader.onload = function (e) {
                    // fileDisplayArea.innerHTML = (` Photo: ${file.name}`)
                    fileDisplayArea.innerHTML = "";

                    let img = new Image();
                    img.src = reader.result;

                    fileDisplayArea.appendChild(img);
               }
               reader.readAsDataURL(file);
          } else {
               fileDisplayArea.innerHTML = "File not supported!"
          }

     }

     const handlePost = (data) => {

          if (user) {

               const image = data.image[0];
               if (!data.post && !data.image[0]) {
                    return toast.error("Please write something");
               }
               setLoading(true)
               if (!data.image[0]) {
                    // create post without image 
                    const Post = {
                         post: data?.post,
                         postUser: user?.displayName,
                         like: 0,
                         comment: [],
                         time: new Date(),
                         userEmail: user?.email,
                         postUserPhoto: user?.photoURL
                    }

                    fetch('https://e-somaz-server.vercel.app/post', {

                         method: 'POST',
                         headers: {
                              'content-type': 'application/json',

                         },
                         body: JSON.stringify(Post)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              navigate('/media')
                              toast.success("Your post is publish ");
                              setLoading(false)
                         })
               }


               //create post  with image
               const formData = new FormData();
               formData.append('image', image);



               fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
                    method: 'POST',
                    body: formData
               })
                    .then(res => res.json())
                    .then(imageData => {
                         // console.log(imageData);
                         if (imageData.success) {

                              const Post = {
                                   post: data?.post,
                                   image: imageData.data.url,
                                   postUser: user?.displayName,
                                   time: new Date(),
                                   like: 0,
                                   comment: [],
                                   userEmail: user?.email,
                                   postUserPhoto: user?.photoURL
                              }

                              fetch('https://e-somaz-server.vercel.app/post', {
                                   method: 'POST',
                                   headers: {
                                        'content-type': 'application/json',

                                   },
                                   body: JSON.stringify(Post)
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        console.log(data);
                                        toast.success("Your post is Publish ");
                                        navigate('/media')
                                        setLoading(false)

                                   })
                         }
                         // else {
                         //      toast.warning("Something is wrong..Try again")
                         // }
                    })


          }
          else {
               toast.warning("Please LogIn or SignUp");
          }
     }

     return (
          // old  code----------------------------
          // <div className='pt-20 mb-72 md:py-0 '>
          //      <h1 className='text-blue-500    text-center text-xl mt-0 md:mt-5 font-bold'>Create Your Post</h1>
          //      <div className='  flex justify-center px-2'>
          //           <div className=' bg-white w-full md:w-[750px] lg:w-[500px] mt-5 md:mx-0  rounded-xl m-auto'>

          //                <form onSubmit={handleSubmit(handlePost)}>
          //                     <div class="flex">
          //                          <div class="m-2  py-1">
          //                               {
          //                                    user?.photoURL ? <img class="inline-block h-10 w-10 rounded-full" src={user?.photoURL} alt='img' /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' class="inline-block h-10 w-10 rounded-full" alt='img' />
          //                               }
          //                          </div>
          //                          <div class="flex-1 pr-5 pt-2 mt-2">
          //                               <input class=" bg-transparent text-gray-700 border  text-md focus:outline-none pl-3 w-full h-12 rounded-full" placeholder="Write something?"  {...register("post", {})} />
          //                          </div>
          //                     </div>
          //                     <div class="flex justify-start">
          //                          <div class="w-full px-2">
          //                               <div class="flex  items-center justify-evenly">
          //                                    <div class=" text-center px-1 py-1 m-2">

          //                                         <span onChange={handleImage} class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:text-blue-400">
          //                                              <label htmlFor="fileInput" >
          //                                                   <svg class="text-center cursor-pointer h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          //                                              </label>
          //                                              <input id="fileInput" onChange={handleImage} type="file" {...register("image", {})}
          //                                                   className="file-input hidden mt-2 file-input-bordered file-input-primary w-full max-w-xs" />Photos
          //                                         </span>
          //                                    </div>
          //                                    <div class=" text-center py-2 m-2">
          //                                         <span class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full   hover:text-blue-400">
          //                                              <svg class="text-center h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Felling
          //                                         </span>
          //                                    </div>
          //                                    <div>
          //                                         {loading ? <button type='submit' className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full">
          //                                              <RotatingLines
          //                                                   strokeColor="white"
          //                                                   strokeWidth="5"
          //                                                   animationDuration="0.75"
          //                                                   width="25"
          //                                                   display='inline'
          //                                                   visible={true}
          //                                              />
          //                                         </button> : <button type='submit' className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full">Post</button>}
          //                                    </div>
          //                               </div>
          //                          </div>
          //                     </div>
          //                </form>
          //                <div id="fileDisplayArea"></div>
          //           </div>
          //      </div>
          // </div>
          //--------------------------------------

          <div className='pt-20 mb-48 md:py-0'> 
               <div class="heading text-center text-xl text-blue-500  mt-0 md:mt-5 mb-5 font-bold md:text-2xl  ">Create New Post</div>
               <form onSubmit={handleSubmit(handlePost)} className='px-2 md:px-0' >
                    <div class="editor bg-white mx-auto w-full  rounded-2xl md:w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                         <textarea  {...register("post", {})} class="description sec p-3 h-40 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>

                         {/* <!-- icons --> */}
                         <div class="icons flex text-gray-500 m-2">
                              {/* photo icon  */}
                              <span onChange={handleImage} class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:text-blue-400">
                                   <label htmlFor="fileInput" >
                                        <svg class="text-center cursor-pointer h-10 w-10" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                   </label>
                                   <input id="fileInput" onChange={handleImage} type="file" {...register("image", {})}
                                        className="file-input hidden mt-2 file-input-bordered file-input-primary w-full max-w-xs" />Photos
                              </span>
                         </div>
                         <div className='ml-5 -mt-5'>
                         <div className='showPreview'  id="fileDisplayArea"></div>
                         </div>
                         
                         {/* <!-- buttons --> */}
                         <div class="buttons justify-end flex">
                              {
                                   loading ? <button disabled type='submit' htmlFor="my-modal-3" class=" rounded-2xl border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
                                        <RotatingLines
                                           strokeColor="white"
                                           strokeWidth="5"
                                           animationDuration="0.75"
                                           display='inline'
                                           visible={true}
                                           width="25"
                                      />
                                   </button> :
                                   <button type='submit' htmlFor="my-modal-3" class=" rounded-2xl border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
                              }
                         </div>

                    </div>
               </form>
          </div>
     );
};

export default CreatePost;