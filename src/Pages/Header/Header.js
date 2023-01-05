
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Auth';
import { FaHom } from "react-icons/fa";
import ChatBox from '../ChatBox/ChatBox';


const Header = () => {
     const { user, logOut } = useContext(AuthContext);

     
     function chatBoxToogleHandler() {
           document.getElementById("formbold-form-wrapper").classList.toggle("hidden");
           document.getElementById("cross-icon").classList.toggle("hidden");
           document.getElementById("chat-icon").classList.toggle("hidden");
     }

     const handleLogOut = () => {
          logOut()
               .then()
               .catch()

     }

     const menuItem = <>
          <li className=' '><Link to="/home">
          <svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg> Home
               </Link></li>
          <li><Link to="/media">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0.2" version="1.1" viewBox="0 0 17 17" class="i" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"></path></svg> Media
               </Link></li>
          {/* <li><Link to="/about" >About</Link></li> */}
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
               <div className="navbar  bg-gradient-to-r from-green-400 to-cyan-400 fixed top-0 z-50">

                    <div className="navbar-start md:ml-10">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                                   {menuItem}
                              </ul>
                         </div>
                         <h1 className='text-black text-xl md:text-3xl'>e<span className='text-primary text-xl font-bold md:text-3xl'>Somaz</span></h1>
                    </div>
                    <div className="navbar-center ">
                         <ul className="menu menu-horizontal hidden text-white lg:flex p-0">
                              {menuItem}
                         </ul>

                    </div>
                    <div className="navbar-end">

                    <label htmlFor="my-modal-4" className=" hidden lg:block rounded-full w-20">open modal</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal bg-transparent cursor-pointer">
                          <label className="modal-box relative w-[350px] md:ml-[500px] lg:ml-[950px]" htmlFor="">
                              <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                           
                            <ChatBox></ChatBox>
                          </label>
                        </label>
                             
                        
                         
                            {/* <ChatBox></ChatBox> */}
                             
                          
                         <div className="dropdown dropdown-end md:mr-10 mr-0">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                   <div className="w-12 rounded-full">
                                   {
                                             user?.photoURL ? <img src={user?.photoURL} alt='' /> : <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='' />
                                        }
                                   </div>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 text-center p-2 shadow bg-base-100 rounded-box w-60">

                                   <li>{user?.uid ? <span>{user?.displayName}</span> : ' '}</li>
                                   <li>{user?.uid ? <span>{user?.email}</span> : ' '}</li>
                                   <li>{user?.uid ? <span onClick={handleLogOut}>Log Out</span> : <span><Link to='/signIn'>Log In</Link></span>}</li>
                              </ul>
                         </div>
                    </div>

               </div>
          </div>
     );
};


export default Header;