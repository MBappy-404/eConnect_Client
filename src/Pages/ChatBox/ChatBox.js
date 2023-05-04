import React from 'react';
import { useContext } from 'react';
import { Watch } from 'react-loader-spinner';
import { AuthContext } from '../../AuthProvider/Auth';

const ChatBox = () => {
    const {user} = useContext(AuthContext);
     return (
        
        
<div className='pb-20 mt-14 lg:mt-0 flex justify-center'>

<section class="flex flex-col w-full md:w-[750px] sm:block lg:hidden justify-center text-gray-600 -mb-20 ">
    <div class="">

      <div class="relative h-[500px] mx-auto bg-white ">
            
            <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                <div class="flex justify-between items-center mb-3">
                    
                    <div class="flex items-center">
                        <a class="inline-flex items-start mr-3" href="#0">
                            {user?.photoURL ? <><img class="rounded-full" src={user?.photoURL} width="48" height="48" alt="Lauren Marsano" /></>: <img class="rounded-full" src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' width="48" height="48" alt="Lauren Marsano" />}
                        </a>
                        <div class="pr-1">
                            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                <h2 class="text-xl leading-snug font-bold">Message</h2>
                            </a>
                            <a class="block text-sm font-medium hover:text-indigo-500" href="#0">{user?.displayName}</a>
                        </div>
                    </div>
                    
                     
                </div>
                
                
            </header>
            
            <div class="py-3 px-5">
                <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>
                
                <div class="divide-y divide-gray-200">
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg" width="32" height="32" alt="Marie Zulfikar" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
                                <div class="text-[13px]">The video chat ended · 2hrs</div>
                            </div>
                        </div>
                    </button>
                    
                </div>
            </div>
            
           <div className='flex justify-center '>
           <button class="absolute -mt-72   w-72 h-16 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                            <Watch
                               height="40"
                               width="40"
                               radius="48"
                               color="white"
                               ariaLabel="watch-loading"
                               wrapperStyle={{}}
                               wrapperClassName=""
                               visible={true}
                             />
                <span className='ml-5'>Available Soon</span>
            </button>
           </div>
        </div>
    </div>
</section>



          </div>
     );
};

export default ChatBox;