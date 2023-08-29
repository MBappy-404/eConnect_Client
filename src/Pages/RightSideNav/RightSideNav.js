import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import RightSideLoader from './RightSideLoader';
import { FaCheckCircle } from 'react-icons/fa';

const RightSideNav = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://e-somaz-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className={` py-2  max-w-[400px] ${!users?.length === 0 && 'w-[340px]'} break-all     hidden lg:block`}>
            <div className="sticky top-3  w-72  2xl:w-full  pt-3 rounded-2xl ">
                <div className="flex flex-col    justify-center    text-gray-600 ">
                    <div>
                        <div className="relative   bg-white py-2   rounded-xl">
                            <div className=" pb-0 px-5 border-b border-gray-300">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <div className="pr-1">
                                            <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                                <h2 className="text-xl leading-snug font-bold">Messages</h2>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="relative inline-flex items-center flex-shrink-0">
                                        <button className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                                            <span className="sr-only">Settings</span>
                                            <svg className="w-4 h-4 mt-1 fill-current" viewBox="0 0 16 16">
                                                <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2 px-5">
                                <h3 className="text-xs font-semibold uppercase ml-1 text-gray-400 mb-1">Chats</h3>
                                <div className="pb-3">

                                    {
                                        users?.length ?
                                            <>
                                                {
                                                    users.slice().reverse().slice(0, 8).map(user =>
                                                        <button key={user._id} className="w-full text-left py-2 rounded-lg hover:bg-gray-200 px-2 focus:outline-none focus-visible:bg-indigo-50">
                                                            <Link to='/joinRoom'>
                                                                <div className="flex items-center">

                                                                    {
                                                                        !user.updatedPhoto && !user.photo ? <img className="avatar  border w-8 h-8 mr-2 object-cover border-gray-300 rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' /> : <>
                                                                            {
                                                                                user.updatedPhoto ? <img className="avatar   border border-gray-300 w-8 h-8 mr-2 object-cover  rounded-full" src={user.updatedPhoto} alt="img" /> : <img className="avatar  border-gray-300 border w-8 h-8 mr-2 object-cover  rounded-full" src={user.photo} alt='img' />
                                                                            }</>
                                                                    }
                                                                    <div>
                                                                        <h4 className="text-sm font-semibold text-gray-900">{user?.updatedName ? user?.updatedName : user?.name} {user.email === "sadikulsad0810@gmail.com" && <FaCheckCircle className='inline w-3 h-3 text-blue-700' />} </h4>
                                                                        <div className="text-[13px]">Say hi now 👋</div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </button>)
                                                }
                                            </> :

                                            <RightSideLoader />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;