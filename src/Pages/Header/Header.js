
import { useContext } from 'react';
import { FaBell, FaBitcoin, FaBookOpen,  FaEdit, FaFacebookMessenger, FaFolderOpen, FaLayerGroup, FaPlus, FaSave, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import logo from '../../Assets/logo.png'
import '../../App.css'

const Header = () => {
     const { user, logOut } = useContext(AuthContext);
    

     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('https://e-somaz-server.vercel.app/users');
               const data = await res.json();
               return data;
          }
     })

     const { data: post = [] } = useQuery({
          queryKey: ['post'],
          queryFn: async () => {
               const res = await fetch('https://e-somaz-server.vercel.app/post');
               const data = await res.json();
               return data;

          }
     })
     let notification = post?.length
     
     

     const handleLogOut = () => {
          logOut()
               .then()
               .catch()

     }

     const menuItem = <>
          <li className=''><Link to="/home">
               <svg viewBox="0 0 28 28" className="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg> Home
          </Link></li>
          <li><Link to="/media">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0.8" version="1.1" viewBox="0 0 17 17" className="i" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"></path></svg> Media
          </Link></li>
          <li><Link to="/joinRoom" > <FaFacebookMessenger className='text-gray-500 w-7 h-7' ></FaFacebookMessenger> Room</Link></li>
          <li><Link to="/earn"> <FaBitcoin className=' text-gray-500 h-7 -rotate-12 w-7'></FaBitcoin>Earn</Link></li>
     </>
     return (

          <div>
               <div className="navbar h-6 bg-white md:bg-white shadow-non lg:shadow-md border-b border-gray-300 lg:border-none fixed top-0 z-50">
                    <div className="navbar-start mt-1 md:mt-0 md:ml-10">
                         <Link to='/home'>
                              <h1 className='text-gray-700 text-xl flex justify-start items-center font-semibold md:text-3xl'>
                                   <img src={logo} alt="" className='w-[18%] md:w-[13%] mb-2 ml-1 md:ml-0  logo' /> 
                                   <span className='text-gray-500 text-xl font-bold  md:text-2xl'>Connect</span></h1>
                         </Link>
                    </div>
                    {/* top nav list for large device  */}
                    <div className="navbar-center ">
                         <ul className="menu menu-horizontal hidden text-gray-500 mr-24 lg:flex p-0">
                              {menuItem}
                         </ul>
                    </div>
                    {/* notification large device */}
                    <div className="navbar-end mr-0  md:mr-8">
                    <div className="hidden lg:block">
                           {user?.uid ? (
                             <div className="inline-flex">
                               <Link to="/notification"  >
                                 <div className="indicator   inline">
                                   <span className="indicator-item  break-all text-center  border border-white   text-[9px] -translate-x-3 w-6 p-1 rounded-full text-white bg-red-500">
                                        {
                                             notification > 99 ? <span>99+</span> : notification
                                        }
                                   </span>
                                   <FaBell className="w-6 h-6 inline hover:text-blue-500 cursor-pointer text-gray-500 mr-5" />
                                 </div>
                               </Link>
                               <FaSignOutAlt
                                 onClick={handleLogOut}
                                 className="w-6 h-6 cursor-pointer mr-3 hover:text-blue-500 text-gray-500 inline"
                               />
                             </div>
                           ) : (
                             <span className="btn btn-sm btn-primary">
                               <Link to="/signIn">Log In</Link>
                             </span>
                           )}
                         </div>


                         {/* shortcut create button for medium and small device  */}
                         {
                              user &&
                              <div className="dropdown dropdown-end block lg:hidden">
                                   <label tabIndex={0} className=" w-8 md:w-12   rounded-full m-1">
                                        <button className="btn  border-1 border-gray-400 btn-sm md:btn-md btn-ghost btn-circle mt-1">
                                             <FaPlus className='text-gray-500   w-4 h-4 md:w-6 md:h-6' />
                                        </button>
                                   </label>
                                   <ul tabIndex={0} className="dropdown-content mt-3  bg-gray-200 z-[1] menu p-2 py-5 shadow-xl rounded-box w-44">
                                        <p className='text-gray-500 ml-3 font-bold text-lg'>Create</p>
                                        <li className='font-semibold'> <Link to='/createPost'>
                                             <FaEdit className='block w-4 h-4 mr-1 text-gray-600' />  Create Post</Link></li>
                                        <li className='font-semibold mt-1'><Link to='/createStory'>
                                             <FaBookOpen className='block w-4 h-4 mr-1 text-gray-600' />Create Story</Link></li>
                                   </ul>
                              </div>
                         }

                         {/* dropdown menu for small device */}
                         <div className="dropdown md:block lg:hidden   dropdown-end md:mr-5 mr-0">
                              {user ? <><label tabIndex={0} className="btn btn-ghost outline-none mt-1 btn-circle avatar">
                                   <div className="w-8 md:w-12 rounded-full">
                                        {
                                             users.filter(users => { return users.email === user?.email }).map(eUser => <>
                                                  {
                                                       !eUser.updatedPhoto && !eUser.photo ? <img className="inline-block object-cover ring-1 ring-primary  h-10 w-10 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                            {
                                                                 eUser.updatedPhoto ? <img className="inline-block object-cover ring-2 ring-primary border border-gray-600 h-10 w-10 rounded-full" src={eUser.updatedPhoto} alt="img" /> : <img className="inline-block object-cover  ring-2 ring-primary h-10 w-10 rounded-full" src={eUser.photo} alt='img' />
                                                            }</>
                                                  }
                                             </>)
                                        }
                                   </div>
                              </label></> : ''}
                              
                              {user ? <> <ul tabIndex={0} className="menu text-base   bg-gray-200 dropdown-content mt-1 text-center p-6 shadow-xl  font-semibold  rounded-box w-52 mr-2">
                                   <li><Link to='/profile'> <FaUserCircle className='block w-4 h-4 mr-2 text-gray-600' />Profile</Link></li>
                                   <li><Link to='/saved'> <FaFolderOpen className='block w-4 h-4 mr-2 text-gray-600' />Saved</Link></li>
                                   <li><Link to='/report'> <FaSave className='block w-4 h-4 mr-2 text-gray-600' />Reports</Link></li>
                                   <li><Link to='/others'> <FaLayerGroup className='block w-4 h-4 mr-2 text-gray-600' />Others</Link></li>
                                   <li><span onClick={handleLogOut}> <FaSignOutAlt className='block w-4 h-4 mr-2 text-gray-600' /> Log Out</span></li>
                              </ul></> : <><span className='btn btn-sm btn-primary'><Link to='/signIn'>Log In</Link></span></>}
                         </div>
                    </div>
               </div>
          </div >
     );
};


export default Header;