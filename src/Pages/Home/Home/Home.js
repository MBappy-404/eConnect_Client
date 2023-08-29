

import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import ShowPost from '../../Media/ShowPost';
import { useState } from 'react';
import Story from '../../Story/Story';




const Home = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState()
    const [loading2, setLoading2] = useState()


    // posts 
    const { data: post = [], refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            setLoading2(true)
            const res = await fetch('https://e-somaz-server.vercel.app/post/top');
            const data = await res.json();
            setLoading2(false)
            return data;


        }
    })

    // users 
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            setLoading(true)
            const res = await fetch('https://e-somaz-server.vercel.app/users');
            const data = await res.json();
            setLoading(false)
            return data;
        }
    })

    //   Create Post 
    // const handlePost = (data) => {

    //     if (user) {

    //         const image = data.image[0];
    //         if (!data.post && !data.image[0]) {
    //             return toast.error("Please write something");
    //         }
    //         setLoading(true)
    //         if (!data.image[0]) {
    //             // create post without image 
    //             const Post = {
    //                 post: data?.post,
    //                 postUser: user?.displayName,
    //                 like: 0,
    //                 comment: [],
    //                 time: new Date(),
    //                 userEmail: user?.email,
    //                 postUserPhoto: user?.photoURL
    //             }

    //             fetch('https://e-somaz-server.vercel.app/post', {

    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json',

    //                 },
    //                 body: JSON.stringify(Post)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     navigate('/media')
    //                     toast.success("Your post is publish ");
    //                     setLoading(false)
    //                 })
    //         }

    //         //create post  with image
    //         const formData = new FormData();
    //         formData.append('image', image);



    //         fetch("https://api.imgbb.com/1/upload?key=f2c11278b0c7405521c7d060f7caf053", {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(res => res.json())
    //             .then(imageData => {
    //                 // console.log(imageData);
    //                 if (imageData.success) {

    //                     const Post = {
    //                         post: data?.post,
    //                         image: imageData.data.url,
    //                         postUser: user?.displayName,
    //                         time: new Date(),
    //                         like: 0,
    //                         comment: [],
    //                         userEmail: user?.email,
    //                         postUserPhoto: user?.photoURL
    //                     }

    //                     fetch('https://e-somaz-server.vercel.app/post', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json',

    //                         },
    //                         body: JSON.stringify(Post)
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             console.log(data);
    //                             toast.success("Your post is Publish ");
    //                             navigate('/media')
    //                             setLoading(false)

    //                         })
    //                 }
    //                 else {
    //                     toast.warning("Something is wrong..Try again")
    //                 }
    //             })


    //     }
    //     else {
    //         toast.warning("Please Login or SignUp");
    //     }
    // }
    return (
        <div className='mt-14 lg:mt-0'>
            {/* <!-- post Content --> */}
            <div class="w-full h-full pb-5">
                {/* story  */}
                <Story></Story>

                {/* create Post  */}
                <div className='  flex justify-center px-2'>
                    <div className=' bg-white w-full md:w-[750px] lg:w-[500px] 2xl:w-[600px] 2xl:w-[600px] mt-5 md:mx-0  rounded-xl m-auto'>
                        <form  >
                            <div class="flex">
                                <Link to='/profile' class="m-2  py-1">

                                    {
                                        users.filter(users => { return users.email === user?.email }).map(eUser => <>
                                            {
                                                !eUser.updatedPhoto && !eUser.photo ? <img class="inline-block h-10 w-10 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                    {
                                                        eUser.updatedPhoto ? <img class="inline-block h-10 object-cover w-10 rounded-full" src={eUser.updatedPhoto} alt="img" /> : <img class="inline-block h-10 object-cover w-10 rounded-full" src={eUser.photo} alt='img' />
                                                    }</>
                                            }
                                        </>)
                                    }

                                </Link>
                                <div class="flex-1 pr-5 pt-2 mt-2">
                                    <Link to='/createPost'> <input class=" hover:bg-gray-200 cursor-pointer  bg-transparent text-gray-700 border  text-md focus:outline-none pl-3 w-full h-10 rounded-full" readOnly placeholder="Write something?" /></Link>
                                </div>
                            </div>
                            <div class="flex justify-start">
                                <div class="w-full px-2">
                                    <div class="flex  items-center justify-between px-2 md:px-10">
                                        <div class=" text-center px-1 py-1 m-2">
                                            <Link to='/createPost'><span class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:text-blue-400">
                                                <label htmlFor="icon-button-file">
                                                    <svg class="text-center cursor-pointer hover:text-blue-500 h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                </label>Photos
                                            </span></Link>
                                        </div>
                                        <div>
                                            <Link to='/createPost'> <button type='submit' className="bg-blue-400 cursor-pointer hover:bg-blue-600 text-white font-bold py-1 md:py-2 mt-1 px-5 md:px-8 mr-5 md:mr-0 rounded-full">Create Post</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* show home page posts  */}
                <main class="h-full w-full px-2">
                    <div>
                        <h1 className='text-blue-600    text-center text-xl mt-5 font-bold'>Popular Posts</h1>

                    </div>
                    {/* spinner when load data    */}

                    {loading2 ? <div className='flex justify-center mt-2 items-center flex-col'>
                        {/* spinner 1 */}
                        <div className="py-2 rounded-2xl mt-3  shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                            <div className="flex p-2 space-x-4 sm:px-2">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
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
                        <div className="py-2 rounded-2xl mt-3  shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                            <div className="flex p-2 space-x-4 sm:px-2">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
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
                        <div className="py-2 rounded-2xl mt-3  shadow-md  w-full bg-white  md:w-[750px] lg:w-[500px] 2xl:w-[600px] animate-pulse ">
                            <div className="flex p-2 space-x-4 sm:px-2">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700"></div>
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
                    </div> : <>
                        {
                            post.map(publicPost => <ShowPost
                                key={publicPost._id}
                                refetch={refetch}
                                setLoading2={setLoading2}
                                publicPost={publicPost}

                            ></ShowPost>)
                        }

                    </>}

                </main>
            </div>
        </div>

    );
};

export default Home;