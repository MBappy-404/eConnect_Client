import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/Auth';
import { FaCheckCircle, FaCog, FaCommentAlt, FaGlobe, FaLocationArrow, FaShare, FaThumbsUp } from 'react-icons/fa';
import { Comment } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ShowReport = ({report,refetch,setLoading}) => {
     const {user} = useContext(AuthContext);
     const [loading3, setLoading3] = useState();
     const {image,post, _id, postUser,time,postUserPhoto,comment,like,userEmail,Reports } = report;

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
                    setLoading(false)
               }
          })
     }
     // const handleLike = () =>{

     //      document.getElementById('like').style.color = 'green'
     // }

     //comment 
    
     return (
          <div>
          <div>
               <div class="border   md:w-[750px] lg:w-[500px] bg-white mt-4 m-auto  rounded-2xl p-4" >
                    <div class="flex items-center	justify-between">
                         <div class="gap-3.5	flex items-center ">
                             {postUserPhoto? <> <img src={postUserPhoto} alt='img' className='w-12 h-12 ring-1   rounded-full'/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' className='w-12 h-12 ring-1   rounded-full'/>}
                              <div class="flex flex-col">
                               <b class=" capitalize">{postUser}</b>
                                   <time class="text-gray-500 text-sm">
                                       {moment(`${time}`).fromNow()}
                                   <div data-tip="Public " className='inline tooltip'><FaGlobe data-tip="hello" className=' inline ml-2'></FaGlobe></div>
                                   </time>
                              </div>
                         </div>

                         <div>
                         <div className="dropdown no-animation   z-10 dropdown-end">
                           <label tabIndex={_id} className="btn btn-sm m-1">See Reports</label>
                           <ul tabIndex={_id} className="dropdown-content bg-gray-100 menu p-2 shadow rounded-box w-52">
                            {
                              Reports.map((report,i) =>  <li className=' mt-1 border bg-red-500 text-white rounded-xl'>  <a>'{report.selectReport}' <br /> -{report.reporterName}- </a></li>)
                            }
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
                          <label htmlFor="my-modal-7" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping cursor-pointer mr-2'></FaShare></label>
                          
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
               
               </div>
          </div>
          </div>
     );
};

export default ShowReport;