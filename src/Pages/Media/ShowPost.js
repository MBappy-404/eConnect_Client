import React, { useState } from 'react';
import { useContext } from 'react';
import { FaCheckCircle, FaThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaLocationArrow,FaGlobe,FaCog } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/Auth';
import '../../App.css'
import moment from 'moment/moment';
import { toast } from 'react-toastify';
import { Comment } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
// import ReportModal from '../Report/ReportModal';
// import { useQuery } from '@tanstack/react-query';


const ShowPost = ({publicPost,refetch,setLoading2}) => {
     const {user} = useContext(AuthContext);
     const [loading3, setLoading3] = useState();
     const {image,post, _id, postUser,time,postUserPhoto,comment,like,
          userEmail
          } = publicPost;
     // console.log(time);
     let times = moment(`${time}`).fromNow();
     const navigate = useNavigate()
     console.log(times);


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
                    setLoading2(false)
               }
          })
     }
     // const handleLike = () =>{

     //      document.getElementById('like').style.color = 'green'
     // }

     //comment 
     const handleComment = (event) => {
          
          setLoading3(true)
          event.preventDefault()

         if(user){
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
                    setLoading3(false)
                    setLoading2(false)
                   
               }
          })
         }
         else{
          toast.warning( "Please Login or SignUp");
         }
     }

     const handleSaved = () =>{

          const savedUser = {
               users:user?.email
          }

          fetch(`https://e-somaz-server.vercel.app/post/saved/${_id}`,{
               method: 'PUT',
               headers: {
                    'content-type': 'application/json',
                    
               },
               body: JSON.stringify(savedUser)
               })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if(data.acknowledged){
                          
                         toast.success( "Post save successfully");
                    }
               })
     }
     const handleReport = (event) =>{

          event.preventDefault()
          const form = event.target;

          const selected = form.selectedReport.value;
          const message = form.reportMessage.value;

          // console.log(selected, message);
          const report = {
               SelectedReports: selected,
               messages: message,
               reportUser: user?.displayName,
               postUserMail: userEmail

          }

          fetch(`https://e-somaz-server.vercel.app/post/report/${_id}`,{
          method: 'PUT',
          headers:{
               'content-type': 'application/json',
          },
          body: JSON.stringify(report)
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                    navigate('/media')
                    toast.success( "Reported successfully");

               }
          })

     }
     
     return (
          <div>
               <div class="border w-full  md:w-[750px] lg:w-[500px] bg-white mt-4 m-auto  rounded-2xl p-4">
                    <div class="flex items-center	justify-between">
                         <div class="gap-3.5	flex items-center ">
                             {postUserPhoto? <> <img src={postUserPhoto} alt='img' className='w-12 h-12 ring-1   rounded-full'/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' className='w-12 h-12 ring-1   rounded-full'/>}
                              <div class="flex flex-col">
                               <b class=" capitalize">{userEmail === 'sadikulsad0810@gmail.com' ? <>{postUser} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <>{ postUser}</> } </b>
                                   <time class="text-gray-500 text-sm">
                                       {moment(`${time}`).fromNow()}
                                   <div data-tip="Public " className='inline tooltip'><FaGlobe data-tip="hello" className=' inline ml-2'></FaGlobe></div>
                                   </time>
                              </div>
                         </div>

                         {/* saved & report  */}
                         <div class=" hover:bg-gray-200 p-3 rounded-full h-3.5 flex	items-center justify-center">
                            
                              <div className="dropdown z-0 dropdown-end">
                                 <label tabIndex={0} className="m-1">  <svg  className=' cursor-pointer'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                                   <path d="M0 0h24v24H0V0z" fill="none" />
                                   <path
                                        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg></label>
                                 <ul tabIndex={0} className="dropdown-content menu p-2  font-semibold shadow-2xl shadow-gray-500 border bg-gray-100  rounded-box w-52 ">
                                   {/* post action  */}
                                   <li onClick={handleSaved}><a>Save Post</a></li>
                                   <label htmlFor={`report-modal-${_id}`} ><li><a>Report Post</a></li></label>
                                 </ul>
                               </div>
                         </div>
                         {/* report modal body  */}
                         <input type="checkbox" id={`report-modal-${_id}`}  className="modal-toggle" />
                         <div className="modal">
                           <div className="modal-box">
                           <label htmlFor={`report-modal-${_id}`}  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                             <h3 className="font-bold text-lg text-gray-600">Report '{postUser}'s  Post</h3>
                             <span className='w-full block bg-gray-300 h-[1px] mt-2'></span>
                             {/* <ReportModal></ReportModal> */}
                             <div class="max-w-2xl  py-5 px-5 m-auto w-full">
                                <div class="text-3xl mb-6 text-center ">
                                </div>
                                <div class="grid grid-cols-1 gap-2 max-w-xl m-auto">
                                  <form onSubmit={handleReport}>
                                    <div class="col-span-2 lg:col-span-1">
                                      <select name='selectedReport'required className=" border-gray-400  border-solid border-2 p-3 md:text-xl w-full">
                                        <option disabled selected>Please select a problem</option>
                                        <option>False information</option>
                                        <option>Suicide or self-injury</option>
                                        <option>Spam</option>
                                        <option>Terrorism</option>
                                        <option>Something Else</option>
                                      </select>
                                    </div>
                                    <div class="col-span-2">
                                      <textarea cols="30" rows="8" required name='reportMessage' class="border-solid border-gray-400 border-2 p-3 mt-2 md:text-xl w-full" placeholder="Write your report"></textarea>
                                    </div>
                                    <div class="col-span-2 text-right">
                                      <button type='submit' class="py-3 px-6 bg-blue-500 mt-5 text-white font-bold w-full sm:w-32">
                                        Submit
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              
                             {/* <div className="modal-action">
                               <label htmlFor={`report-modal-${_id}`}  className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32">Yay!</label>
                             </div> */}
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
                          <label htmlFor="my-modal- 7" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping mr-2 cursor-pointer'></FaShare></label>
                          
                          {/* Put this part before </body> tag */}
                          <input type="checkbox" id="my-modal- 7" className="modal-toggle" />
                          <div className="modal  modal-middle">
                            <div className="modal-box">
                            <div className='flex justify-center items-center self-center'>
                            <h1 className='text-2xl md:text-4xl text-blue-600 font-semibold'>Available S
                            <FaCog className='w-5 inline   md:w-10  text-blue-600 animate-spin border-green-500'></FaCog>
                            <FaCog className='w-5  inline   md:w-10  text-blue-600 animate-spin border-green-500'></FaCog>
                            n</h1>
                            </div>
                    
                              <div className="modal-action">
                                <label htmlFor="my-modal- 7" className="btn btn-success">Ok</label>
                              </div>
                            </div>
                          </div>
                              
                         </div>
                    </div>
                    <div>

                     {/* comments container  */}
                      <div class="container  mx-auto px-0 md:px-3 flex flex-col py-2  justify-center ">
                         {
                              comment?.length ? <>
                              {
                             loading3 ? <><Comment
                             visible={true}
                             height="35"
                             width="35"
                             ariaLabel="comment-loading"
                             wrapperStyle={{}}
                             wrapperClass="comment-wrapper"
                             color="#fff"
                             backgroundColor="#F4442E"
                           /> {comment.slice(0).reverse().slice(0,3).map(comments=> 
                              
                              <div class="bg-gray-100 w-full mt-2 flex items-center p-1 rounded-lg">
                              <div class="flex items-center">
                                <img src={ comments.userPhoto} alt="img" class="w-8 h-8 ring-1 rounded-full"/>
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
                              
                              )} </> :  comment &&  comment.slice(0).reverse().slice(0,3).map(comments=> 
                              
                              <div class="bg-gray-100 w-full mt-2 flex items-center p-1 rounded-lg">
                              <div class="flex items-center">
                               { comments.userPhoto ? <> <img src={ comments.userPhoto} alt="img" class="w-8 h-8 ring-1 rounded-full"/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" class="w-8 h-8 ring-1 rounded-full"/>}
                              </div>
                              <div class="flex-grow p-3">
                                <div class="font-semibold text-sm md:text-md text-gray-800">
                                 {comments.userName}
                                </div>
                                <div class="text-xs md:text-sm    text-gray-600">
                                <p>{
                                   comments.comment.length > 15 ? <>
                                    {comments.comment.slice(0,15)}....<span className='font-semibold cursor-pointer text-gray-700'><Link to={`/postDetails/${_id}`}>see more</Link></span>
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
                              comment?.length > 3 && <><h1 className='text-sm mt-2 md:text-base float-left  font-semibold text-gray-500 cursor-pointer hover:text-blue-500'> <Link to={`/postDetails/${_id}`}>View all comments</Link> </h1></>
                         }
                       
                      </div>
                  
                    </div>
                    <div class="flex items-center justify-start  mt-4">
				{/* <img src={user?.photoURL}  class=" rounded-full w-10 h-10 object-cover border" alt='img'/> */}
                    {user && user.photoURL ?  <> <img src={user?.photoURL}  alt="" class=" rounded-full w-10 h-10 object-cover border" /></> : <><img class=" rounded-full w-10 h-10 object-cover border" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img'/></>}
				<div class="flex items-center md:justify-between ml-2  md:w-7/12 lg:w-9/12  rounded-3xl bg-gray-200	 overflow-hidden px-2 ">
				 <form onSubmit={handleComment}>
                     <input  type="text" id='commentValue'  class="text-sm p-3 text-gray-700 md:p-3 w-40 md:w-72 lg:w-72 rounded-3xl    outline-none bg-gray-200 " placeholder="Write your comment..." name="comment" required/>
                     <button type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-16 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline animation rotate-45'></FaLocationArrow></button>
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