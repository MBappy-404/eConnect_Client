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
import { Comment, RotatingLines } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PhotoProvider, PhotoView } from 'react-photo-view';
 


const ShowPost = ({publicPost,refetch,setLoading2}) => {
     const {user} = useContext(AuthContext);
     const [loading,setLoading] = useState()
     const [loading4,setLoading4] = useState()
     const [loading3, setLoading3] = useState();
     const {image,post,userId, _id, postUser,time,postUserPhoto,comment,like, userEmail  } = publicPost;
     // console.log(time);
     // let times = moment(`${time}`).fromNow();
     const navigate = useNavigate()
     // console.log(times);


     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
            const res = await fetch('https://e-somaz-server.vercel.app/users');
            const data = await res.json();
            return data;
          }
        })

     //  Like increase and color 
     const handleLikeIncrease = (id) =>{
          fetch(`https://e-somaz-server.vercel.app/post/${id}`,{
          method: 'PUT'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                     
                    refetch()
                    setLoading2(false)
                    document.getElementById(id).style.color="#0080FE"
               }
          })
     }
     

     //comment 
     const handleComment = (event) => {
          event.preventDefault()
          // updated name & photo 
          let name =  users.filter(users => { return users.email === user?.email }).map(eUser => eUser.name )
          let updatedName = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedName)
          let photo =  users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedPhoto )
          let commentUserId = users.filter(users => { return users.email === user?.email }).map(eUser => eUser._id)
          const postUser = updatedName[0] ? updatedName[0] : name[0];

          setLoading3(true)
         

         if(user){
          const form = event.target;
          const commentValue = form.comment.value
          // console.log(commentValue);

          // send Database 
          const commentData = {
               comment:commentValue,
               commentUserId:commentUserId[0],
               postId: _id,
               time:new Date(),
               userName: postUser,
               userEmail:user?.email,
               userPhoto: photo ? photo[0] : user?.photoURL
          }

          // console.log(commentData);

          fetch(`https://e-somaz-server.vercel.app/comments/post/${_id}`,{
               method:'PUT',
               headers: {
                    'content-type': 'application/json',
                    
               },
               body: JSON.stringify(commentData)
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               
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

     // post saved 
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
                         navigate('/saved')
                    }
               })
     }
     // report post 
     const handleReport = (event) =>{
          setLoading4(true)
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
                    toast.success( "Reported successfully");
                    setLoading4(false)
                    navigate('/home')
                    form.reset()
               }
          })

     }

     // delete post 
     const handleDelete = () =>{
          fetch(`https://e-somaz-server.vercel.app/post/delete/${_id}`, {
               method: 'DELETE'
          })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                         toast.success('Delete Successfully')
                    }
                    refetch()
                    setLoading2(false)
                    
               })
     
     }

     //update post
     const handleUpdatePost = (e) =>{
          e.preventDefault()
          setLoading(true)

          const form = e.target;

          const updateText = {
                updateText : form.updateText.value,
          };
          // console.log(updatePost);
          fetch(`https://e-somaz-server.vercel.app/post/update/${_id}`,{
               method: 'PUT',
               headers:{
                    'content-type': 'application/json',
               },
               body: JSON.stringify(updateText)
               })
               .then(res => res.json())
               .then(data => {
                    // console.log(data);
                    if(data.acknowledged){
                         toast.success("Post Updated");
                         setLoading(false)
                         refetch()
                         form.reset()
                    }
               })
     }
     
     return (
          <div>
               {/* post  */}
               <div className="border w-full shadow-md  md:w-[750px] lg:w-[500px] 2xl:w-[600px]  bg-white mt-2 m-auto  rounded-xl p-2">
                    <div className="flex items-center	justify-between">
                         <div className="gap-1.5	flex items-center ">
                              {/* post user photo */}
                              <Link to={`/user/${userId}`} className=' cursor-pointer'>
                                {postUserPhoto ? <> <img src={postUserPhoto} alt='img' className='w-11 h-11 md:w-12 md:h-12 ring-1 object-cover rounded-full'/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' className='w-12 h-12 ring-1   rounded-full'/>}
                              </Link>

                              <div className="flex flex-col">
                               {/* post user name      */}
                            
                             <div className='leading-3 break-all'>
                             <Link to={`/user/${userId}`}>
                               <span className=" text-sm font-semibold hover:bg-gray-200  md:text-base">{userEmail === 'sadikulsad0810@gmail.com' ? <>{postUser} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <>{ postUser}</> } </span>
                               </Link>
                               <span className='text-xs md:text-sm font-normal text-gray-500 inline'> {image ? 'Add a photo' : 'Write a post'}</span>
                               </div>
                            
                               {/* post time  */}
                                   <time className="text-gray-500 text-xs md:text-sm">
                                      <span data-tip={time.slice(0,10)} className=' tooltip cursor-default'> {moment(`${time}`).fromNow()}</span>
                                   <div data-tip="Public" className='inline tooltip'><FaGlobe  className=' inline ml-2'></FaGlobe></div>
                                   </time>
                              </div>
                         </div>

                         {/* saved, delete, report  */}
                         <div className=" hover:bg-gray-200 p-3 rounded-full h-3.5 flex	items-center justify-center">
                            
                              <div className="dropdown z-0 dropdown-end">
                                 <label tabIndex={0} className="m-1">  <svg  className=' cursor-pointer'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="34px" fill="#92929D">
                                   <path d="M0 0h24v24H0V0z" fill="none" />
                                   <path
                                        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg></label>

                                 <ul tabIndex={0} className="dropdown-content menu p-2  font-semibold shadow-2xl shadow-gray-500 border bg-gray-100 -mt-3  rounded-box w-52 ">
                                   {/* post action  */}
                                  {
                                   user?.email === userEmail || user?.email === "sadikulsad0810@gmail.com" ?  <li><label htmlFor={`post-update-modal-${_id}`}><span>Edit Post</span></label></li> : ' '
                                  }

                                   <li onClick={handleSaved}><span>Save Post</span></li>

                                  {
                                   userEmail === user?.email ? ' ' : <label htmlFor={`report-modal-${_id}`} ><li><span>Report Post</span></li></label> 
                                  }

                                   {user?.email === userEmail  || user?.email === "sadikulsad0810@gmail.com" ? <li onClick={handleDelete}><span>Delete Post</span></li> : " "}
                                 </ul>
                               </div>
                         </div>

                         {/* ............post update modal body..........  */}

                         <input type="checkbox" id={`post-update-modal-${_id}`}  className="modal-toggle" />
                         <div id={`post-update-modal-${_id}`} className="modal">
                           <div className="modal-box">
                           <label htmlFor={`post-update-modal-${_id}`}  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                             <h3 className="font-bold text-lg text-center text-gray-600">Edit Post</h3>
                             <span className='w-full block bg-gray-300 h-[1px] mt-2'></span>
                             
                             <div className='flex py-3 leading-5'>
                               <div>
                                   {
                                        postUserPhoto ? <img src={postUserPhoto} className='inline-block object-cover h-10 w-10 rounded-full' alt="img" /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' className='inline-block object-cover h-10 w-10 rounded-full' alt="img" />
                                   }
                               </div>
                               <div className='ml-1'>
                                   <p className='font-semibold'>{postUser}</p>
                                   <div data-tip="Public" className='inline text-[13px]  font-semibold text-sm text-gray-400 tooltip'>Public<FaGlobe className='inline  ml-2'></FaGlobe></div>
                               </div>
                             </div>
                             
                             <form onSubmit={handleUpdatePost}>
                              <div className="max-w-2xl mx-auto ml-1">                         	 
                                  <textarea name='updateText' defaultValue={post} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-600 font-semibold bg-gray-50 rounded-lg border border-gray-300  focus:outline-none  " placeholder='Write something' required></textarea>
                              </div>
                                 
                                    <div className="col-span-2 flex justify-end">
                                      {
                                        loading ? <button type='submit' disabled  className="py-2  flex justify-center rounded-full px-6 bg-blue-500 mt-5 text-white font-bold w-full sm:w-32">
                                          <RotatingLines
                                                  strokeColor="white"
                                                  strokeWidth="5"
                                                  animationDuration="0.75"
                                                  width="24"
                                                  visible={true}
                                             />
                                      </button> 
                                       :
                                      <button type='submit'  className="py-2 rounded-full px-6 bg-blue-500 mt-5 text-white font-bold w-full sm:w-32">
                                     Update
                                    </button> 

                                      }                                 
                                    </div>
                                    </form>      
                           </div>
                         </div>

                         {/* ..............report modal body.........  */}

                         <input type="checkbox" id={`report-modal-${_id}`}  className="modal-toggle" />
                         <div id={`modal-${_id}`} className="modal">
                           <div className="modal-box">
                           <label htmlFor={`report-modal-${_id}`}  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                             <h3 className="font-bold text-lg text-center text-gray-600">Report '{postUser}'s  Post</h3>
                             <span className='w-full block bg-gray-300 h-[1px] mt-2'></span>
                             {/* <ReportModal></ReportModal> */}
                             <div className="max-w-2xl  py-5 px-5 m-auto w-full">
                                <div className="text-3xl mb-0 text-center ">
                                </div>
                                <div className="grid grid-cols-1 gap-2 max-w-xl m-auto">
                                  <form onSubmit={handleReport}>
                                    <div className="col-span-2 lg:col-span-1">
                                      <select name='selectedReport'required className=" border-gray-400  border-solid border-2 p-3 md:text-xl w-full">
                                        <option  selected>Please select a problem</option>
                                        <option>False information</option>
                                        <option>Suicide or self-injury</option>
                                        <option>Spam</option>
                                        <option>Terrorism</option>
                                        <option>Something Else</option>
                                      </select>
                                    </div>
                                    <div className="col-span-2">
                                      <textarea cols="30" rows="8" required name='reportMessage' className="border-solid border-gray-400 border-2 p-3 mt-2 md:text-xl w-full" placeholder="Write your report"></textarea>
                                    </div>
                                    <div className="col-span-2 flex justify-end text-right">
                                     {
                                        loading4 ?  <button   type='submit' disabled className="py-2 flex cursor-not-allowed justify-center rounded-full px-6 bg-blue-500 mt-5 text-white font-bold w-full sm:w-32">
                                        <RotatingLines
									strokeColor="white"
									strokeWidth="5"
									animationDuration="0.75"
									width="24"
									visible={true}
								/>
                                      </button>  :

                                       <button   type='submit' className="py-2 rounded-full px-6 bg-blue-500 mt-5 text-white font-bold w-full sm:w-32">
                                       Submit
                                       </button> 
                                     }                                 
                                    </div>
                                  </form>
                                </div>
                              </div>
                           </div>
                         </div>
                    </div>
                    {/* post text */}



                    <div className="whitespace-pre-wrap break-all text-left px-1  text-gray-700 mt-4">
                         {
                              post?.length > 300 ? <>{post.slice(0,300)} <Link to={`/postDetails/${_id}`} className='font-semibold cursor-pointer hover:text-blue-500'>...see more</Link></> : post
                         }
                    </div>
                    <div className="mt-3 flex  justify-center border-b  flex-wrap -mx-2">
                        {
                         image? <><PhotoProvider>
                                    <PhotoView src={image}>
                                         <img src={image} className='  border-t max-h-96 object-cover w-full ' alt="img"  />
                                    </PhotoView>
                              </PhotoProvider></> : ''
                        }

                    </div>
                    {/* post reaction  */}
                    <div className=" h-11 border-b -mx-2  flex items-center gap-1 md:gap-2 px-3 justify-between">
                    <div className="flex items-center	gap-2">
                              <FaThumbsUp  className='w-5 h-5 hover:text-[#0080FE]  transition-all hover:scale-125 hover:-rotate-15  cursor-pointer ' id={_id}  onClick={()=>handleLikeIncrease(_id)} ></FaThumbsUp>
                         
                              <div  className="text-sm">{like}</div>
                         </div>
                         <div className="flex items-center	gap-2 cursor-pointer" >
                              <FaCommentAlt  className='w-5 h-5 hover:text-gray-600'></FaCommentAlt>
                              <div className="text-sm	">{comment?.length}</div>
                         </div>
                       
                         <div>
                            
                              {/* The button to open modal */}
                          <label htmlFor="my-modal- 7" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping mr-2 cursor-pointer'></FaShare></label>
                          
                          {/* Put this part before </body> tag */}
                          <input type="checkbox" id="my-modal- 7" className="modal-toggle" />
                          <div className="modal  modal-middle">
                            <div className="modal-box">
                              <div className="flex flex-col px-2 md:px-3     bg-center bg-cover bg-no-repeat ">
                                   <div
                                        className="grid   w-full  place-items-center   mx-auto  sm:my-auto  space-y-5 text-center cursor-pointer">
                                         <img src="https://cdn.dribbble.com/users/2344801/screenshots/4774578/alphatestersanimation2.gif" alt="" />
                                        <h1 className="text-xl font-bold uppercase text-indigo-600 transition duration-500">Available Soon</h1>
                                   </div>
                              </div>              
                              <div className="modal-action">
                                <label htmlFor="my-modal- 7" className="btn btn-primary">Ok</label>
                              </div>
                            </div>
                          </div>
                         </div>
                    </div>
                    <div>

                     {/* comments container  */}
                      <div className="container  mx-auto px-0 md:px-3 flex flex-col py-2  justify-center ">
                         {/* comment spinner  */}
                         {
                              comment?.length ? <>
                              {
                             loading3 ? <><Comment
                             visible={true}
                             height="40"
                             width="40"
                             ariaLabel="comment-loading"
                             wrapperStyle={{}}
                             wrapperclassName="comment-wrapper"
                             color="white"
                             backgroundColor="#6A64F1"
                           /> <span className='text-gray-500 ml-2 text-xs'>Submitting your comment</span>
                           {/*spinner comments  */}
                            {comment?.slice(0).reverse().slice(0,3).map(comments=> 
                              
                              <div className=" w-full mt-2 flex gap-1 p-1 rounded-lg">
                              <div className="flex">
                             { comments?.userPhoto ? <> <img src={ comments.userPhoto} alt="img" className="w-8 h-8 ring-1 rounded-full object-cover"/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" className="w-8 h-8 ring-1 object-cover rounded-full"/>}
                            </div>
                               <div className="block max-w-[270px] break-all md:max-w-[350px]">
                                    <div className="flex justify-center items-center space-x-2">
                                      <div className="bg-gray-100 w-auto rounded-xl px-3 pb-2">
                                      <div className="font-medium ">
                                          <span className="hover:underline  cursor-pointer text-sm text-gray-700 font-semibold">
                                          <span>{comments.userEmail === "sadikulsad0810@gmail.com" ? <> {comments.userName} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <> {comments.userName}</> } </span>
                                          </span>
                                      </div>
                                      <div className="text-[14px] break-all  min-w-[100px] md:text-[15px] px-1 font-medium text-gray-500">
                                      {comments.comment   }
                                      </div>
                                      </div>
                                    
                                    </div>
                                  <div className="flex justify-start items-center text-sm w-full">
                                    <div className="text-gray-500 cursor-default px-2 flex items-center justify-center space-x-1">
                                      <span className="hover:underline ml-2">
                                        <small data-tip={`${comments.time.slice(0,10)}`}  className='tooltip'>{moment(`${comments.time}`).fromNow()}</small>
                                      </span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                              
                              )} </> : 
                              
                              comment &&  comment.slice(0).reverse().slice(0,3).map(comments=> 
                              // comments 
                              <div className=" w-full mt-2 flex gap-1 p-1 rounded-lg">
                              <Link to={`/user/${comments.commentUserId}`}>
                              <div className="flex ">
                               { comments.userPhoto ? <> <img src={ comments.userPhoto} alt="img" className="w-8 h-8 ring-1 rounded-full object-cover"/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" className="w-8 h-8 ring-1 object-cover rounded-full"/>}
                              </div>
                              </Link>
                                 <div className="block  max-w-[270px] break-all md:max-w-[350px]">
                                      <div className="flex justify-center items-center space-x-2">
                                        <div className="bg-gray-100 w-auto rounded-xl px-3 pb-2">
                                        <div className="font-medium">
                                            <Link to={`/user/${comments.commentUserId}`} >
                                            <span className="hover:underline cursor-pointer text-sm text-gray-700 font-semibold">
                                            <span>{comments.userEmail === "sadikulsad0810@gmail.com" ? <> {comments.userName} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <> {comments.userName}</> } </span>
                                            </span>
                                            </Link>
                                        </div>
                                        {/* comment text  */}
                                        <div className="text-[14px] min-w-[100px] break-all  md:text-[14px] px-1 font-medium text-gray-500">

                                        {comments?.comment?.length > 100 ? <span>{comments?.comment?.slice(0,100)} <Link to={`/postDetails/${_id}`} className='hover:text-blue-600 font-bold cursor-pointer'>...see more</Link> </span> : comments?.comment  }

                                        </div>
                                        </div>
                                      
                                      </div>
                                    <div className="flex justify-start items-center text-sm w-full">
                                      <div className="text-gray-500 cursor-default  px-2 flex items-center justify-center space-x-1">
                                        <span className="hover:underline ml-2">
                                          <small data-tip={`${comments.time.slice(0,10)}`}  className='tooltip'>{moment(`${comments.time}`).fromNow()}</small>
                                        </span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                              
                              )
                             }
                              
                              </> : <><h1 className='text-sm py-3'>No comments available...</h1></>
                         }

                         {
                              comment?.length > 3 && <><h1 className='text-sm mt-2 md:text-base float-left  font-semibold text-gray-500 cursor-pointer hover:text-blue-500'> <Link to={`/postDetails/${_id}`}>View all comments</Link> </h1></>
                         }
                       
                      </div>
                  
                    </div>
                    {/* comment submit section  */}
                    
                    <div  className="flex items-center justify-start  mt-4">
                    {
                           users.filter(users => { return users.email === user?.email }).map(eUser => <>
                            {
                               !eUser.updatedPhoto && !eUser.photo ? <img className=" rounded-full w-10 h-10 object-cover border" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                   {
                                       eUser.updatedPhoto ? <img className=" rounded-full w-10 h-10 object-cover border" src={eUser.updatedPhoto} alt="img" /> : <img className=" rounded-full w-10 h-10 object-cover border" src={eUser.photo} alt='img' />
                                   }</>
                           }
                           </>)
                    }
				<div className="flex items-center md:justify-between ml-2 hind md:w-7/12 lg:w-9/12  rounded-3xl bg-gray-200	 overflow-hidden px-2 ">
				 <form onSubmit={handleComment}>
                      {/* comment input     */}
                        <input
                         type="text" id='commentValue'  className="text-sm p-3 text-gray-700 md:p-3 w-40 md:w-56 lg:w-72 rounded-3xl    outline-none bg-gray-200 " placeholder="Write your comment..." name="comment" required/>
                     
                     {
                         loading3 ? <button disabled type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-16 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline cursor-not-allowed animation rotate-45'></FaLocationArrow></button> : <button type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-16 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline animation rotate-45'></FaLocationArrow></button>
                     }
                     </form>
				</div>
			</div>
               </div>
          
          </div>
     );
};

export default ShowPost;