// import React from 'react';
// import { useContext } from 'react';
// import { useState } from 'react';
// import { FaThumbsUp } from "react-icons/fa";
// import { FaCommentAlt } from "react-icons/fa";
// import { FaShare } from "react-icons/fa";
// import { FaLocationArrow } from "react-icons/fa";
// import { AuthContext } from '../../../AuthProvider/Auth';


// const TopPost = ({publicPost}) => {
//      const {user} = useContext(AuthContext);

//      const [increaseLike, setIncreaseLike] = useState(0)
//      const {image,post,  postUser,postUserPhoto} = publicPost;
//      // console.log(postUserPhoto);

//      const handleLikeIncrease = () =>{
          
//           setIncreaseLike(increaseLike + 1)
//      }
//      // const handleLike = () =>{

//      //      document.getElementById('like').style.color = 'green'
//      // }
//      return (
//           <div>
//                <div class="border w-full  md:w-[400px] lg:w-[600px] bg-white mt-6 m-auto rounded-2xl p-4">
//                     <div class="flex items-center	justify-between">
//                          <div class="gap-3.5	flex items-center ">
//                               <img src={postUserPhoto} alt='img' className='w-16 h-16 ring-1 ring-primary  rounded-full'/>
//                               <div class="flex flex-col">
//                                    <b class="mb-2 capitalize">{ postUser}</b>
//                                    <time class="text-gray-400 text-xs">06 August at 09.15 PM
//                                    </time>
//                               </div>
//                          </div>
//                          <div class="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
//                                    <path d="M0 0h24v24H0V0z" fill="none" />
//                                    <path
//                                         d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
//                               </svg>
//                          </div>
//                     </div>
//                     <div class="whitespace-pre-wrap mt-7">{post}</div>
//                     <div class="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	">
//                         {
//                          image? <> <img src={image} className=' max-h-96 object-cover w-full ' alt="img"  /></> : ''
//                         }

//                     </div>
//                     <div class=" h-16 border-b  flex items-center gap-1 md:gap-2 px-0 md:px-3 justify-between">
//                     <div class="flex items-center	gap-2">
//                               <FaThumbsUp  className='w-5 h-5 hover:scale-150 hover:-rotate-12 transition-all   cursor-pointer '  id='like' onClick={handleLikeIncrease} ></FaThumbsUp>
//                               <div  class="text-sm">{increaseLike}</div>
//                          </div>
//                          <div class="flex items-center	gap-2	">
//                               <FaCommentAlt className='w-5 h-5'></FaCommentAlt>
//                               <div class="text-sm	">10 Comments</div>
//                          </div>
                       
//                          <div class="flex items-center	gap-2">
                            
//                               {/* The button to open modal */}
//                           <label htmlFor="my-modal-6" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping cursor-pointer'></FaShare></label>
                          
//                           {/* Put this part before </body> tag */}
//                           <input type="checkbox" id="my-modal-6" className="modal-toggle" />
//                           <div className="modal modal-bottom sm:modal-middle">
//                             <div className="modal-box">
//                               <h3 className="font-bold text-lg">Share Your Timeline</h3>
//                               <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//                               <div className="modal-action">
//                                 <label htmlFor="my-modal-6" className="btn">Yay!</label>
//                               </div>
//                             </div>
//                           </div>
//                               <div class="text-sm">Share</div>
//                          </div>

//                     </div>
//                     <div class="flex items-center justify-between mt-4">
// 				<img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  class="bg-yellow-500 rounded-full w-10 h-10 object-cover border" alt='img'/>
// 				<div class="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
// 					<input type="text" class="h-50 w-50 bg-gray-50 outline-none " placeholder="Write your comment..." name="comment"/>
//                         <button className=''> <FaLocationArrow className='w-5 h-5 animation rotate-45 '></FaLocationArrow></button>
// 				</div>
// 			</div>

//                </div>
//           </div>
//      );
// };

// export default TopPost;