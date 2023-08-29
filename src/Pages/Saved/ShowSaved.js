import moment from 'moment';
import React, { useContext, useState } from 'react';
import { FaCheckCircle,  FaCommentAlt, FaGlobe, FaLocationArrow, FaShare, FaThumbsUp } from 'react-icons/fa';
import { Comment } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';

const ShowSaved = ({saved, refetch,setLoading}) => {

     const {user} = useContext(AuthContext);
     const [loading3, setLoading3] = useState();
     const {image,post, _id, postUser,time,postUserPhoto,comment,like,userEmail,userId } = saved;

     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
            const res = await fetch('https://e-somaz-server.vercel.app/users');
            const data = await res.json();
            return data;
          }
        })

     const handleLikeIncrease = (id) =>{
          fetch(`https://e-somaz-server.vercel.app/post/${id}`,{
          method: 'PUT'
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data);
               if(data.acknowledged){
                     
                    refetch()
                    setLoading(false)
                    document.getElementById(id).style.color="#0080FE"
               }
          })
     }
      

     //comment 
     const handleComment = (event) => {
          let name =  users.filter(users => { return users.email === user?.email }).map(eUser => eUser.name )
          let updatedName = users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedName)
          let photo =  users.filter(users => { return users.email === user?.email }).map(eUser => eUser.updatedPhoto )
          let commentUserId = users.filter(users => { return users.email === user?.email }).map(eUser => eUser._id)
          const postUser = updatedName[0] ? updatedName[0] : name[0];

          setLoading3(true)
          event.preventDefault()

         if(user){
          const form = event.target;
          const commentValue = form.comment.value

          // console.log(commentValue);

          // send Database 
          const commentData = {
               comment:commentValue,
               commentUserId: commentUserId[0],
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
                    setLoading(false)
                   
               }
          })
         }
         else{
          toast.warning( "Please Login or SignUp");
         }
     }
     return (
          <div>
               <div>
               <div className="border w-full  md:w-[750px] lg:w-[500px] 2xl:w-[600px] bg-white mt-4 m-auto  rounded-2xl p-2">
                    <div className="flex items-center	justify-between">
                         <div className="gap-1.5	flex items-center ">
                         <Link to={`/user/${userId}`} className=' cursor-pointer'>
                                {postUserPhoto ? <> <img src={postUserPhoto} alt='img' className='w-11 h-11 md:w-12 md:h-12 ring-1 object-cover rounded-full'/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' className='w-12 h-12 ring-1   rounded-full'/>}
                              </Link>
                              <div className="flex flex-col">
                              <div>
                              
                             <div className=' leading-3'>
                               <Link to={`/user/${userId}`}>
                               <span className=" text-sm font-semibold hover:bg-gray-200  md:text-base">{userEmail === 'sadikulsad0810@gmail.com' ? <>{postUser} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <>{ postUser}</> } </span>
                               </Link>

                               <span className='text-xs md:text-sm font-normal text-gray-500 inline'> {image ? 'Add a photo' : 'Write a post'}</span>
                               </div>
                             
                               </div>
                                   <time className="text-gray-500 text-xs md:text-sm ">
                                       {moment(`${time}`).fromNow()}
                                   <div data-tip="Public " className='inline tooltip'><FaGlobe  className=' inline ml-2'></FaGlobe></div>
                                   </time>
                              </div>
                         </div>
                    </div>
                    {/* post text  */}
                    <div className="whitespace-pre-wrap break-all mt-4">{post}</div>
                    <div className="mt-5 flex gap-2 justify-center border-b pb-4 flex-wrap">
                        {
                         image? <> <img src={image} className=' max-h-96 object-cover w-full ' alt="img"  /></> : ''
                        }

                    </div>
                    <div className=" h-16 border-b  flex items-center gap-1 md:gap-2 px-0 md:px-3 justify-between">
                    <div className="flex items-center	gap-2">
                              <FaThumbsUp  className='w-5 h-5 hover:scale-125 hover:-rotate-15 hover:text-[#0080FE] transition-all   cursor-pointer '  id={_id} onClick={()=>handleLikeIncrease(_id)} ></FaThumbsUp>
                              <div  className="text-sm">{like}</div>
                         </div>
                         <div className="flex items-center	gap-2	">
                              <FaCommentAlt  className='w-5 h-5'></FaCommentAlt>
                              <div className="text-sm	">{comment.length}</div>
                         </div>
                       
                         <div>
                              {/* The button to open modal */}
                          <label htmlFor="my-modal-7" className="">  <FaShare title='Share Now' className='w-5 h-5 hover:animate-ping cursor-pointer mr-2'></FaShare></label>
                          
                          {/* Put this part before </body> tag */}
                          <input type="checkbox" id="my-modal-7" className="modal-toggle" />
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
                                <label htmlFor="my-modal-7" className="btn btn-primary">Ok</label>
                              </div>
                            </div>
                          </div>
                         </div>
                    </div>
                    <div>

                     {/* comments container  */}
                      <div className="container  mx-auto px-0 md:px-3 flex flex-col py-2  justify-center ">
                         {
                              comment?.length ? <>
                              {
                             loading3 ? <><Comment
                             visible={true}
                             height="50"
                             width="50"
                             ariaLabel="comment-loading"
                             wrapperStyle={{}}
                             wrapperclassName="comment-wrapper"
                             color="white"
                             backgroundColor="#6A64F1"
                           /> {comment.slice(0).reverse().slice(0,3).map(comments=> 
                              // comments spinner 
                              <div className=" w-full mt-2 flex gap-1 p-1 rounded-lg">
                              <div className="flex">
                             { comments.userPhoto ? <> <img src={ comments.userPhoto} alt="img" className="w-8 h-8 ring-1 rounded-full object-cover"/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" className="w-8 h-8 ring-1 object-cover rounded-full"/>}
                            </div>
                               <div className="block max-w-[270px] md:max-w-[350px]">
                                    <div className="flex justify-center items-center space-x-2">
                                      <div className="bg-gray-100 w-auto rounded-xl px-3 pb-2">
                                      <div className="font-medium">
                                          <span className="hover:underline cursor-pointer text-sm text-gray-700 font-semibold">
                                          <span>{comments.userEmail === "sadikulsad0810@gmail.com" ? <> {comments.userName} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <> {comments.userName}</> } </span>
                                          </span>
                                      </div>
                                      <div className="text-[14px] break-all  min-w-[100px]  md:text-[15px] px-1 font-medium text-gray-500">
                                      {comments.comment   }
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
                              
                              )} </> :  comment &&  comment.slice(0).reverse().slice(0,3).map(comments=> 
                              //    comments 
                                   <div className=" w-full mt-2 flex gap-1 p-1 rounded-lg">
                                   <div className="flex">
                                   <Link to={`/user/${comments.commentUserId}`}>
                              <div className="flex ">
                               { comments.userPhoto ? <> <img src={ comments.userPhoto} alt="img" className="w-8 h-8 ring-1 rounded-full object-cover"/></>:  <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt="img" className="w-8 h-8 ring-1 object-cover rounded-full"/>}
                              </div>
                              </Link>
                                 </div>
                                    <div className="block max-w-[270px] md:max-w-[350px]">
                                         <div className="flex justify-center items-center space-x-2">
                                           <div className="bg-gray-100 w-auto rounded-xl px-3 pb-2">
                                           <div className="font-medium">
                                           <Link to={`/user/${comments.commentUserId}`} >
                                            <span className="hover:underline cursor-pointer text-sm text-gray-700 font-semibold">
                                            <span>{comments.userEmail === "sadikulsad0810@gmail.com" ? <> {comments.userName} <FaCheckCircle className='inline w-3 h-3 text-blue-700' /> </> : <> {comments.userName}</> } </span>
                                            </span>
                                            </Link>
                                           </div>
                                           <div className="text-[14px] break-all  min-w-[100px]  md:text-[15px] px-1 font-medium text-gray-500">
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
                              
                              )
                             }
                              
                              </> : <><h1 className='text-sm '>No comment available...</h1></>
                         }
                         {
                              comment?.length > 3 && <><h1 className='text-sm mt-2 md:text-base float-left  font-semibold text-gray-500 cursor-pointer hover:text-blue-500'> <Link to={`/postDetails/${_id}`}>View all comments</Link> </h1></>
                         }
                       
                      </div>
                  
                    </div>
                     {/* comment submit section  */}
                     <div className="flex items-center justify-start  mt-4">
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
				<div className="flex items-center md:justify-between ml-2  md:w-7/12 lg:w-9/12  rounded-3xl bg-gray-200	 overflow-hidden px-2 ">
				 <form onSubmit={handleComment}>
                      {/* comment input     */}
                     <input  type="text" id='commentValue'  className="text-sm p-3 text-gray-700 md:p-3 w-40 md:w-56 lg:w-72 rounded-3xl    outline-none bg-gray-200 " placeholder="Write your comment..." name="comment" required/>
                     {
                         loading3 ? <button disabled type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-16 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline cursor-not-allowed animation rotate-45'></FaLocationArrow></button> : <button type='submit'> <FaLocationArrow className='mr-5 md:mr-0 ml-0 md:ml-16 lg:ml-0 w-4 h-4 md:w-5 md:h-5 inline animation rotate-45'></FaLocationArrow></button>
                     }
                     </form>
				</div>
			</div>

               </div>
          </div>
          </div>
     );
};

export default ShowSaved;