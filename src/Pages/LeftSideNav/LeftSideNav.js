import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { FaCheckCircle, FaFolderOpen, FaLayerGroup, FaSave, FaSignOutAlt, FaUserCircle, FaUserFriends } from 'react-icons/fa';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://e-somaz-server.vercel.app/users');
            const data = await res.json();
            return data;

        }
    })


    const nav_items = [
        {
            path: '/profile',
            nav_item: 'Profile',
            icon: <FaUserCircle className='text-gray-500 w-[1.4em] h-[1.4em]' ></FaUserCircle >,
        },
        {
            path: '/saved',
            nav_item: 'Saved',
            icon: <FaFolderOpen className='text-gray-500 w-[1.4em] h-[1.4em]' ></FaFolderOpen >,
                 
        },
        {
            path: '/report',
            nav_item: 'Reports',
            icon: <FaSave className='text-gray-500 w-[1.4em] h-[1.4em]' ></FaSave >,
                
        },

        {
            path: '/people',
            nav_item: 'People',
            icon: <FaUserFriends className='w-[1.4em] h-[1.4em] text-gray-500' ></FaUserFriends>,
        },
        {
            path: '/others',
            nav_item: 'Others',
            icon: <FaLayerGroup className='w-[1.4em] h-[1.4em] text-gray-500' ></FaLayerGroup>,
        },
        {
            path: '/signIn',
            nav_item: 'Log Out',
            icon: <FaSignOutAlt onClick={handleLogOut} className='text-gray-500 w-[1.4em] h-[1.4em]' ></FaSignOutAlt >,

        },

    ]

    return (

        <div className=' h-full '>
            <div className='flex flex-col items-end left-layout'>
                <div>
                    {
                        !users.length ?
                            <div className="flex items-center gap-2 rounded-lg p-4 bg-white w-60">
                                <div className='w-10 h-10 bg-gray-400 animate-pulse rounded-full'></div>
                                <div className='w-40 bg-gray-400 h-3 animate-pulse '></div>

                            </div>

                            :

                            <div>
                                {
                                    users.filter(users => { return users.email === user?.email }).map(eUser =>
                                        <div key={eUser._id} className="">

                                            <div className="w-60 2xl:w-80 left-side-nav-top">
                                                {/* <!-- Card --> */}
                                                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm ">
                                                    <div className=" p-2  rounded-full  ">
                                                        <div className=''>
                                                            {
                                                                !eUser.updatedPhoto && !eUser.photo ? <img className="w-10 h-10 m-auto rounded-full object-cover  " src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                                    {
                                                                        eUser.updatedPhoto ? <img className="w-10 h-10  m-auto rounded-full object-cover  ring-2 ring-primary" src={eUser.updatedPhoto} alt="img" /> : <img className="w-10 h-10 m-auto ring-2 ring-primary rounded-full object-cover  " src={eUser.photo} alt='img' />
                                                                    }</>
                                                            }
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <div className='text-wrap left-side-userName'>
                                                            {eUser?.updatedName ? <h5 className=" text-md font-bold text-gray-600  ">{eUser?.updatedName?.length > 13 ? <>{eUser.updatedName?.slice(0, 13)}...</> : <>{eUser?.updatedName}</>} {eUser.email === "sadikulsad0810@gmail.com" && <FaCheckCircle className='inline ml-1 w-4 h-4 text-blue-700' />}  </h5> : <h5 className=" text-md font-bold text-gray-600 ">{user?.displayName}</h5>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>

                <div className='mt-4 bg-white w-60 2xl:w-80 left-side-menu rounded-xl p-5 '>
                    <ul className="menu  font-semibold  w-46">
                        {nav_items.map((e, i) => (
                            <NavLink
                                key={i}
                                to={e.path}
                                // activeStyle={{ color: "blue" }}
                                className={({ isActive }) => isActive ? 'rounded-md mt-2 text-blue-500 bg-gray-300 transition-colors' : ' mt-2'}>
                                <li><a href=" ">{e.icon} <span className='left-side-icon ml-2'>{e.nav_item}</span></a></li>
                            </NavLink>

                        ))}

                    </ul>

                </div>
            </div>
            <div>
                <footer className=" pt-2 sm:mt-10">
                    <div className=" mx-auto sm:px-6 ">
                        <div className="flex justify-between flex-wrap">
                            <div className="w-full text-gray-400">
                                <p className="text-xs text-center  font-medium ">© 2023 eConnect.  All Rights Reserved.</p>
                                {/* <p className="text-sm font-medium"></p> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default LeftSideNav;