import React from 'react';
import './CreatePost.css'
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import { FaGlobe } from 'react-icons/fa';


const CreatePost = () => {
     const { user } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
     const [loading, setLoading] = useState(false)
     // const [loading2, setLoading2] = useState()

     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://e-somaz-server.vercel.app/users');
               const data = await res.json();
               return data;

          }
     })

     // selected file preview 
     const handleImage = (e) => {
          let fileInput = document.getElementById('fileInput');
          let fileDisplayArea = document.getElementById('fileDisplayArea');
          let file = fileInput.files[0];
          // console.log(file.name);
          let imageType = /image.*/;
          if (file.type.match(imageType)) {
               let reader = new FileReader();
               reader.onload = function (e) {
                    fileDisplayArea.innerHTML = (`Attached 1 Photo`)
                    // console.log(file);
                    // fileDisplayArea.innerHTML = "";

                    let img = new Image();
                    img.src = reader.result;

                    fileDisplayArea.appendChild(img);
               }
               reader.readAsDataURL(file);
          } else {
               fileDisplayArea.innerHTML = "File not supported!"
               toast.error('Please Select Jpg/Png/webp')
          }

     }

     // create post 
     const handlePost = (data) => {

          // updated name & photo 
          let updatedName = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedName)
          let name = users.filter(users => { return users.email === user?.email }).map(eUser => eUser?.name)
          let photo = users.filter(users => { return users.email === user?.email }).map(eUser => eUser?.updatedPhoto)
          let userId = users.filter(users => { return users.email === user?.email }).map(eUser => eUser._id)
          const postUser = updatedName[0] ? updatedName[0] : name[0];
          // console.log(name[0]);

          if (user) {
               const image = data.image[0];
               if (!data.post && !data.image[0]) {
                    return toast.warning("Please write something");
               }
               setLoading(true)
               if (!data.image[0]) {
                    // create post without image 
                    const Post = {
                         post: data?.post,
                         userId: userId[0],
                         postUser: postUser,
                         like: 0,
                         comment: [],
                         time: new Date(),
                         userEmail: user?.email,
                         postUserPhoto: photo ? photo[0] : user?.photoURL
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
                              // console.log(data);
                              navigate('/media')
                              toast.success("Your post is publish ");
                              setLoading(false)
                         })
               }
               //create post  with image
               const formData = new FormData();
               formData.append('image', image);
               //  upload image bb 
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
                                   postUser: updatedName ? updatedName[0] : name[0],
                                   time: new Date(),
                                   userId: userId[0],
                                   like: 0,
                                   comment: [],
                                   userEmail: user?.email,
                                   postUserPhoto: photo ? photo[0] : user?.photoURL
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
                                        // console.log(data);
                                        toast.success("Your post is Publish ");
                                        navigate('/media')
                                        setLoading(false)

                                   })
                         }
                    })
          }
          else {
               toast.warning("Please Log In or Sign Up");
          }
     }

     return (


          <div className='pt-20 mb-48 2xl:mb-72 md:py-0 w-full  '>
               <div className="heading text-center text-xl text-blue-500  mt-0 md:mt-20 lg:mt-5 mb-5 font-bold md:text-2xl  ">Create Post</div>
               <form onSubmit={handleSubmit(handlePost)} className='px-2 md:px-0 '>
                    <div className="editor bg-white mx-auto w-full  rounded-2xl md:w-[750px] lg:w-[500px]  flex flex-col text-gray-800 border   p-4 shadow-lg max-w-2xl">
                         <div className=" pb-3 gap-2	flex items-center ">
                              {/* post user photo */}
                              <div>
                                   {
                                        users.filter(users => { return users.email === user?.email }).map(eUser => <>
                                             {
                                                  !eUser.updatedPhoto && !eUser.photo ? <img className="inline-block h-10 w-10 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                       {
                                                            eUser.updatedPhoto ? <img className="inline-block h-10 border w-10 rounded-full" src={eUser.updatedPhoto} alt="img" /> : <img className="inline-block h-10 w-10 border rounded-full" src={eUser.photo} alt='img' />
                                                       }</>
                                             }
                                        </>)
                                   }
                              </div>
                              <div className='leading-3'>
                                   {/*user name*/}
                                   <div>
                                        {users.filter(users => { return users.email === user?.email }).map(eUser =>
                                             eUser.updatedName ?
                                                  <span className=" text-sm font-semibold   md:text-base">{eUser.updatedName}</span>
                                                  :
                                                  <span className=" text-sm font-semibold   md:text-base">{eUser.name}</span>)}
                                   </div>
                                   <div data-tip="Public" className='inline   font-semibold text-sm text-gray-400 tooltip'>Public<FaGlobe className='inline  ml-2'></FaGlobe></div>
                              </div>
                         </div>
                         {/* post write  */}
                         <textarea  {...register("post", {})}  disabled={loading}   className="p-3 h-40 border rounded-2xl border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here"></textarea>
                         <div className=" flex  justify-between px-5 pt-5 items-center text-gray-500">
                              {/* photo icon  */}
                              <span onChange={handleImage} className=" flex items-center mb-2 text-blue-400 text-base leading-6 font-medium    hover:text-blue-400">
                                   <label className='cursor-pointer hover:text-blue-600 transition-colors' htmlFor="fileInput" >
                                        <svg className="text-center cursor-pointer h-9 w-9" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                   </label>
                                   <input id="fileInput" onChange={handleImage} type="file" {...register("image", {})}
                                        className="file-input hidden file-input-bordered file-input-primary w-full " />Photos
                              </span>
                              {/* feeling  */}
                              <div className="dropdown mb-2  cursor-pointer hidden md:block">
                                   <label tabIndex={0}>
                                        <div className="">
                                             <span className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full   hover:text-blue-400">
                                                  <svg className="text-center h-8 w-8 transition-colors cursor-pointer hover:text-blue-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Felling
                                             </span>
                                        </div>
                                   </label>
                                   {/* emojis */}
                                   <div tabIndex={0} className="dropdown-content z-auto card card-compact w-64 p-2 bg-indigo-500">
                                        <div className="card-body ">
                                             <span>😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚
                                                  ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡  🤯 😋 😛 😝 😜 🤪😺 😸 😹 😻 😼 😽 🙀 😿 😾
                                                  👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🫰 🤟 🤘 🤙
                                             </span>
                                        </div>
                                   </div>
                              </div>

                              {/* <!-- buttons --> */}
                              <span>
                                   {
                                        // loader 
                                        loading ? <button className="py-2 rounded-full bg-blue-400 hover:bg-blue-500 flex cursor-not-allowed justify-center transition-colors  text-white font-bold w-24 md:w-28">
                                             <RotatingLines
                                                  strokeColor="white"
                                                  strokeWidth="5"
                                                  animationDuration="0.75"
                                                  width="24"
                                                  visible={true}
                                             />
                                        </button> :
                                             <button type='submit' className="py-2 rounded-full bg-blue-400 hover:bg-blue-500 transition-colors text-white font-bold
													 w-24 md:w-28">
                                                  Post
                                             </button>
                                   }
                              </span>
                         </div>
                         <div className='-mt-4 px-5'>
                              {/* preview photo  */}
                              <div className='showPreview' id="fileDisplayArea"></div>
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default CreatePost;