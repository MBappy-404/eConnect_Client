import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import { FaGlobe, FaImages } from 'react-icons/fa';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const CreateStory = () => {

     window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
     });

     const { user } = useContext(AuthContext);
     const [selectedImage, setSelectedImage] = useState(null);
     const navigate = useNavigate()
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [loading, setLoading] = useState()


     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://e-somaz-server.vercel.app/users');
               const data = await res.json();
               return data;

          }
     })

     // preview photo 
     const handleImageChange = (event) => {
          const file = event.target.files[0];
          // console.log(file);
          if (file) {
               const reader = new FileReader();
               reader.onload = () => {
                    setSelectedImage(reader.result);
               };
               reader.readAsDataURL(file);
          }


     };

     const handlePostStory = (data) => {

          data.image[0] || toast.warning("Please select a photo")
          data.image[0] && setLoading(true)
          // verify user name 
          let name = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.name)
          let updatedName = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedName)
          let photo = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedPhoto)
          const postUser = updatedName[0] ? updatedName[0] : name[0];
          console.log(photo ? photo[0] : user?.photoURL);

          const image = data.image[0];
          const formData = new FormData();
          formData.append('image', image);
          // console.log(formData);
          //  upload image bb 
          fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(imageData => {
                    // console.log(imageData);
                    if (imageData.success) {
                         const post = {
                              image: imageData.data.url,
                              userName: postUser,
                              userPhoto: photo ? photo[0] : user?.photoURL

                         }
                         // console.log(post);
                         fetch('https://e-somaz-server.vercel.app/story', {
                              method: 'POST',
                              headers: {
                                   'content-type': 'application/json',
                              },
                              body: JSON.stringify(post)
                         })
                              .then(res => res.json())
                              .then(data => {
                                   // console.log(data);
                                   toast.success("Your story is Publish ");
                                   navigate('/home')
                                   // setLoading(false)

                              })
                    }
               })
     }

     return (
          <div className='pt-20 md:pt-5 pb-28 2xl:pb-72'>
               <div class="heading text-center text-xl text-blue-500 mt-0 md:mt-14  lg:mt-0  mb-5 font-bold md:text-2xl  ">Create  Photo Story</div>

               <div class="flex items-center justify-center px-2">
                    <div class="mx-auto  w-full md:w-[750px] rounded-xl shadow-xl 2xl:w-[600px] lg:w-[500px] bg-white">
                         <form onSubmit={handleSubmit(handlePostStory)} class="pb-4 px-9 ">
                              <div class="mb-6 pt-4">

                                   <div class=" pb-5 gap-2	flex items-center ">
                                        {/* user photo */}
                                        <div>
                                             {
                                                  users.filter(users => { return users.email === user?.email }).map(eUser => <>
                                                       {
                                                            !eUser.updatedPhoto && !eUser.photo ? <img class="inline-block h-10 w-10 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                                 {
                                                                      eUser.updatedPhoto ? <img class="inline-block h-10 border w-10 rounded-full" src={eUser.updatedPhoto} alt="img" /> : <img class="inline-block h-10 w-10 border rounded-full" src={eUser.photo} alt='img' />
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
                                                            <span class=" text-sm font-semibold   md:text-base">{eUser.updatedName}</span>
                                                            :
                                                            <span class=" text-sm font-semibold   md:text-base">{eUser.name}</span>)}
                                             </div>
                                             <div data-tip="Public" className='inline   font-semibold text-sm text-gray-400 tooltip'>Public<FaGlobe className='inline  ml-2'></FaGlobe></div>
                                        </div>
                                   </div>


                                   <div class="mb-8">
                                        <input type="file" {...register("image", {})} onChange={handleImageChange} id="file" class="sr-only" />
                                        <label
                                             for="file"
                                             class="relative flex min-h-[200px] cursor-pointer items-center justify-center rounded-md flex-col border border-dashed border-[#e0e0e0] p-12 text-center"
                                        >
                                             <div>
                                                  <FaImages className={`w-16 h-16 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'} ${selectedImage ? 'text-[#6A64F1]' : 'text- text-gray-400'} hover:text-[#6A64F1]`} />
                                             </div>
                                             {selectedImage ? <span className='block text-sm w-[250px] text-gray-400'>Click here to change photo</span> : <span className='block text-sm text-gray-400'>Select photo</span>}
                                        </label>

                                   </div>

                                   <div className='ml-2'>
                                        {selectedImage && (
                                             <img src={selectedImage} alt="Preview" className="my-4 border rounded-2xl" style={{ maxWidth: '200px' }} />
                                        )}
                                        {selectedImage && <span className='ml-1 text-gray-500 '>Your photo is ready to post</span>}
                                   </div>
                              </div>

                              <div>

                                   {/* buttons  */}
                                   {
                                        loading ?
                                             // spinner button 
                                             <button
                                                  disabled
                                                  type='submit'
                                                  class="hover:shadow-form w-full  rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold cursor-not-allowed flex justify-center text-white outline-none"
                                             >
                                                  {/* spinner  */}
                                                  <RotatingLines
                                                       strokeColor="white"
                                                       strokeWidth="5"
                                                       animationDuration="0.75"
                                                       display='inline'
                                                       visible={true}
                                                       width="24"
                                                  /> <span className=' text-base text-white ml-2'>Uploading</span>
                                             </button> :
                                             <button
                                                  type='submit'
                                                  class="hover:shadow-form w-full rounded-md bg-blue-600 hover:bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                             >
                                                  Post
                                             </button>
                                   }
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default CreateStory;