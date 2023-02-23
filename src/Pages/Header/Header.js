
import { useContext } from 'react';
import { FaBell,FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';
 


const Header = () => {
     const { user, logOut } = useContext(AuthContext);

     const handleLogOut = () => {
          logOut()
               .then()
               .catch()

     }

     const menuItem = <>
          <li  className=''><Link to="/home">
          <svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg> Home
               </Link></li>
          <li><Link to="/media">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0.2" version="1.1" viewBox="0 0 17 17" class="i" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"></path></svg> Media
               </Link></li>
          <li><Link to="/video" ><svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg>Watch</Link></li>
          {/* <li><Link to="/message">Message</Link></li> */}
          {/* {
               user?.uid ? <> <li><Link onClick={handleLogOut} to="/signup">Log Out</Link></li></> :
                    <>
                         <li><Link to="/signUp">Sign Up</Link></li>
                         <li><Link to="/signIn">Log in</Link></li></>

          } */}
     </>
     return (

          <div>
               <div className="navbar h-6 bg-gradient-to-r from-cyan-500 to-blue-500 fixed top-0 z-50">

                    <div className="navbar-start md:ml-10">
                          
                         <h1 className='text-black text-xl md:text-3xl'>e<span className='text-primary text-xl font-bold md:text-3xl'>Somaz</span></h1>
                    </div>
                    <div className="navbar-center ">
                         <ul className="menu menu-horizontal hidden text-white mr-24 lg:flex p-0">
                              {menuItem}
                         </ul>
                       <input type="text" placeholder='Search' className='w-40 md:w-96 ml-3 font-semibold text-gray-500 rounded-full pl-3  bg-gray-200 py-1 md:py-2 sm:block lg:hidden outline-none' />
 
                    </div>
                    <div className="navbar-end mr-0  md:mr-8">
 
                     {/* notification */}
                     <div className='hidden lg:block'>
                     {user?.uid ?  <><Link to='/notification'> <FaBell  className='w-6 h-6 cursor-pointer text-white inline mr-5'/></Link> <FaSignOutAlt onClick={handleLogOut} className='w-6 h-6 cursor-pointer mr-3 text-white inline'></FaSignOutAlt></> : <span className='btn btn-sm btn-primary'><Link to='/signIn'>Log In</Link></span>}
                     </div>

                            {/* <ChatBox></ChatBox> */}
                    
                    <div className="dropdown md:block lg:hidden dropdown-end md:mr-5 mr-0">
                          {user? <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               <div className="w-8 md:w-12 rounded-full">
                               <img src={user?.photoURL} alt='' />
                               </div>
                          </label></> : ''}
                         {user? <> <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 text-center p-2 shadow bg-base-100 rounded-box w-60">
                               <li><Link to='/profile'>Profile</Link></li>
                               <li><Link to='/saved'>Saved</Link></li>
                               <li><Link to='/report'>Reports</Link></li>
                               <li> <span onClick={handleLogOut}>Log Out</span></li>
                          </ul></> : <><span className='btn btn-sm btn-primary'><Link to='/signIn'>Log In</Link></span></> }
                    </div>
                    </div>

               </div>
          </div>
     );
};


export default Header;