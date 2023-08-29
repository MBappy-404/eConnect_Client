
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import { NavLink, } from 'react-router-dom';
import { FaBell, FaBitcoin, FaFacebookMessenger } from 'react-icons/fa';
import '../App.css'
import { FaUserFriends } from "react-icons/fa";
import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/RightSideNav/RightSideNav';
import { useQuery } from '@tanstack/react-query';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import '../Pages/LeftSideNav/LeftSideNav.css'

const Main = () => {


    const { data: post = [] } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch('https://e-somaz-server.vercel.app/post');
            const data = await res.json();
            return data;

        }
    })

    let notification = post?.length


    const nav_items = [
        {
            path: '/home',
            nav_item: 'Home',
            icon: <svg viewBox="0 0 28 28" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt" fill="currentColor" height="28" width="28"><path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path></svg>,
        },
        {
            path: '/joinRoom',
            nav_item: 'Message',
            icon: <FaFacebookMessenger className='w-7 h-7' ></FaFacebookMessenger>,
        },
        {
            path: '/media',
            nav_item: 'Media',
            icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0.2" version="1.1" viewBox="0 0 17 17" class="i" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0 13h15v1h-15v-1zM0 15.993h10v-1h-10v1zM17 1v11h-17v-11h17zM16 2h-15v9h15v-9z"></path></svg>,
        },

        {
            path: '/people',
            nav_item: 'People',
            icon: <FaUserFriends className='w-7 h-7' ></FaUserFriends>,
        },
        {
            path: '/earn',
            nav_item: 'earn',
            icon: <FaBitcoin className='w-7 h-7 -rotate-12' ></FaBitcoin>,
        },
        {

            path: '/notification',
            nav_item: 'notification',
            icon: <div className="inline-flex">
                <Link to="/notification"  >
                    <div className="indicator inline">
                        <span className="indicator-item text-white break-all border border-white text-center  text-[9px] translate-x-1 w-6 p-1 rounded-full  bg-red-500">
                            {
                                notification > 99 ? <span>99+</span> : notification
                            }
                        </span>
                        <FaBell className="w-7 h-7 inline " />
                    </div>
                </Link>
            </div>,
        }
    ]


    return (
        <div>
            <ScrollToTop />
            {/* top nav  */}
            <Header></Header>

            <div className='mt-16 main-layout'>
                <div class="flex justify-center">
                    {/* left side nav for  medium and large device  */}
                    <div class="w-60 left-side-nav hidden lg:block">
                        <div className='flex justify-end'>
                            <div class=" fixed top-0">
                                <div class="hidden  mt-[85px] md:hidden lg:block  ">
                                    <LeftSideNav />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* navbar for small device  */}
                    <div class="w-full middle-content lg:w-[43%] h-full  pb-5">
                        <div className='flex justify-center'>
                            <div class="flex py-4 px-4 mb-2 fixed rounded-b-xl shadow-lg w-full  md:w-[750px]  z-20 top-16 gap-0  md:flex lg:hidden  border-b bg-white items-center justify-between">
                                {nav_items.map((e, i) => (
                                    <NavLink
                                        key={i}
                                        to={e.path}
                                        // activeStyle={{ color: "blue" }}
                                        className={({ isActive }) => isActive ? 'text-blue-600 transition-colors' : 'text-gray-500 transition-colors'}>
                                        <span  >{e.icon}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* middle content      */}
                        <Outlet></Outlet>

                    </div>

                    {/* right side content  */}
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Main;