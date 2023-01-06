import React from 'react';
import { useContext } from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaLocationArrow,FaGlobe,FaCog } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/Auth';
import '../../App.css'
import moment from 'moment/moment';
// import { useQuery } from '@tanstack/react-query';


const ShowPost = ({publicPost,refetch}) => {
     const {user} = useContext(AuthContext);
     const {image,post, _id, postUser,time,postUserPhoto,comment,like} = publicPost;
    

     const handleLikeIncrease = () =>{
          
          // document.getElementById('like').classList.add('text-green-300')

          fetch(`https://e-somaz-server.vercel.app/post/${_id}`,{
          method: 'PUT'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                    refetch()
               }
          })
     }
     // const handleLike = () =>{

     //      document.getElementById('like').style.color = 'green'
     // }

     //comment 
     const handleComment = (event) => {
          // const getComment = document.getElementById('commentValue');
          // const commentValue = getComment.value
          // getComment.value = ''
          // console.log(commentValue);

          event.preventDefault()

          const form = event.target;
          const commentValue = form.comment.value

          console.log(commentValue);

          // send Database 
          const commentData = {
               comment:commentValue,
               postId: _id,
               time:new Date(),
               userName: user?.displayName,
               userPhoto: user?.photoURL

          }

          console.log(commentData);

          fetch(`https://e-somaz-server.vercel.app/comments/post/${_id}`,{
               method:'PUT',
               headers: {
                    'content-type': 'application/json',
                    
               },
               body: JSON.stringify(commentData)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
               if(data.acknowledged){
                    form.reset()
                    refetch()
               }
          })
     }
     return (
          <div>
               <div class="border w-full  md:w-[750px] lg:w-[500px] bg-white mt-4 m-auto  rounded-2xl p-4">
                    <div class="flex items-center	justify-between">
                         <div class="gap-3.5	flex items-center ">
                              <img src={postUserPhoto} alt='img' className='w-12 h-12 ring-1 ring-primary  rounded-full'/>
                              <div class="flex flex-col">
                                   <b class=" capitalize">{ postUser}</b>
                                   <time class="text-gray-500 text-sm">
                                       {moment(`${time}`).fromNow()}
                                       
                                   <div data-tip="Public " className='inline tooltip'><FaGlobe data-tip="hello" className=' inline ml-2'></FaGlobe></div>
                                   </time>
                              </div>
                         </div>
                         <div class=" hover:bg-gray-200 p-3 rounded-full h-3.5 flex	items-center justify-center">
                            
                              <div className="dropdown z-0  dropdown-end">
                                 <label tabIndex={0} className="m-1">  <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                                   <path d="M0 0h24v24H0V0z" fill="none" />
                                   <path
                                        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg></label>
                                 <ul tabIndex={0} className="dropdown-content menu p-2  shadow-2xl shadow-gray-500 border bg-gray-100  rounded-box w-52 ">
                                   <li><a>Save Post</a></li>
                                   <li><a>Report Post</a></li>
                                 </ul>
                               </div>
                         </div>
                    </div>
                    <div class="whitespace-pre-wrap mt-4">{post}</div>
                    <div class="mt-5 flex gap-2 justify-center border-b pb-4 flex-wrap">
                        {
                         image? <> <img src={image} className=' max-h-96 object-cover w-full ' alt="img"  /></> : ''
                        }

                    </div>
                    <div class=" h-16 border-b  flex items-center gap-1 md:gap-2 px-0 md:px-3 justify-between">
                    <div class="flex items-center	gap-2">
                              <FaThumbsUp  className='w-5 h-5 hover:scale-150 hover:-rotate-12 transition-all   cursor-pointer '  id='like' onClick={handleLikeIncrease} ></FaThumbsUp>
                              <div  class="text-sm">{like}</div>
                         </div>
                         <div class="flex items-center	gap-2	">
                              <FaCommentAlt  className='w-5 h-5'></FaCommentAlt>
                              <div class="text-sm	">{comment.length}</div>
                         </div>
                       
                         <div>
                            
                              {/* The button to open modal */}
                          <label htmlFor="my-modal-7" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping cursor-pointer'></FaShare></label>
                          
                          {/* Put this part before </body> tag */}
                          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                          <div className="modal  modal-middle">
                            <div className="modal-box">
                            <div className='flex justify-center items-center self-center'>
                            <h1 className='text-2xl md:text-4xl text-blue-600 font-semibold'>Available S
                            <FaCog className='w-5 inline   md:w-10  text-blue-600 animate-spin border-green-500'></FaCog>
                            <FaCog className='w-5  inline   md:w-10  text-blue-600 animate-spin border-green-500'></FaCog>
                            n</h1>
                            </div>
                    
                              <div className="modal-action">
                                <label htmlFor="my-modal-7" className="btn btn-success">Ok</label>
                              </div>
                            </div>
                          </div>
                              <div class="text-sm">Share</div>
                         </div>

                    </div>
                    <div>

                     
                      <div class="container  mx-auto px-0 md:px-3 flex flex-col py-2  justify-center ">
                    
                        
                         {
                              comment?.length ? <>
                              {
                        comment &&  comment.slice(0).reverse().slice(0,3).map(comments=> 
                              
                              <div class="bg-gray-100 w-full mt-2 flex items-center p-1 rounded-lg">
                              <div class="flex items-center">
                                <img src={ comments.userPhoto} alt="img" class="w-8 h-8 rounded-full"/>
                              </div>
                              <div class="flex-grow p-3">
                                <div class="font-semibold text-sm md:text-md text-gray-800">
                                 {comments.userName}
                                </div>
                                <div class="text-xs md:text-sm    text-gray-600">
                                <p>{
                                   comments.comment.length > 15 ? <>
                                    {comments.comment.slice(0,15)}....<span className='font-semibold cursor-pointer text-gray-700'>see more</span>
                                   </> : <>
                                   {comments.comment}
                                   </>
                                   } </p>
                                </div>
                              </div>
                              <div>
                               <p className='text-xs mt-10 mr-2 text-gray-500' >{moment(`${comments.time}`).fromNow()}</p>
                              </div>
                            </div>
                              
                              )
                       }
                              
                              </> : <><h1 className='text-sm '>No comment available...</h1></>
                         }

                         {
                              comment?.length > 3 && <><h1 className='text-sm mt-2 md:text-base float-left  font-semibold text-gray-500'>View all comments</h1></>
                         }
                       
                      </div>
                  
                    </div>
                    <div class="flex items-center justify-start  mt-4">
				{/* <img src={user?.photoURL}  class=" rounded-full w-10 h-10 object-cover border" alt='img'/> */}
                    {user?  <> <img src={user?.photoURL}  alt="" class=" rounded-full w-10 h-10 object-cover border" /></> : <><img class=" rounded-full w-10 h-10 object-cover border" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img'/></>}
				<div class="flex items-center 	md:justify-between	 ml-2  md:w-9/12  rounded-3xl bg-gray-200	 overflow-hidden px-2 ">
				 <form onSubmit={handleComment} >
                     <input  type="text" id='commentValue'  class="text-sm p-3 text-gray-700 md:p-3 w-40 md:w-70 lg:w-72 rounded-3xl    outline-none bg-gray-200 " placeholder="Write your comment..." name="comment" required/>
                     <button type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-10 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline animation rotate-45'></FaLocationArrow></button>
                         {/* <label htmlFor="submit">Submit</label> */}
                         {/* <input type="submit" id='submit' className='bg-gray-400 p-3 text-sm -ml-8 rounded-3xl' /> */}
                        
                     </form>
                         
                        
				</div>
			</div>

               </div>
          </div>
     );
};

export default ShowPost;