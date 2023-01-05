import React from 'react';

const ChatBox = () => {
     return (
          <div>
               
{/* <div class="flex items-center justify-center">
        <div class="flex flex-col w-full max-w-sm   bg-white p-4">
            <h2 class="flex flex-row items-center justify-between">
                <span class="font-bold text-xl text-gray-900">Stories</span>
                <a href="#" class="text-gray-600 hover:text-gray-700">
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                </a>
            </h2>
            <ul class="flex flex-row space-x-3 overflow-x-auto py-4 px-2 mt-2">
                <li>
                    <div class="relative">
                        <span class="absolute left-0 top-0 -mt-1 -ml-1 flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <a href="#" class="flex rounded-full border-2 border-blue-500 p-px w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                </li>
                <li>
                    <a href="#" class="flex rounded-full border-2 border-blue-200 p-px w-16 h-16">
                        <img src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="#" class="flex rounded-full border-2 border-blue-200 p-px w-16 h-16">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="#" class="flex rounded-full border-2 border-blue-200 p-px w-16 h-16">
                        <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="#" class="flex rounded-full border-2 border-blue-200 p-px w-16 h-16">
                        <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                    </a>
                </li>
                <li>
                    <a href="#" class="flex rounded-full border-2 border-blue-200 p-px w-16 h-16">
                        <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                    </a>
                </li>
            </ul>
            <h2 class="flex flex-row items-center justify-between">
                <span class="font-bold text-xl text-gray-900">Messages</span>
                <a href="#" class="text-gray-600 hover:text-gray-700">
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>
                </a>
            </h2>
            <div class="flex flex-col relative mt-4">
                <div class="absolute flex items-center justify-center h-10 w-10 left-0 top-0">
                    <svg class="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div>
                    <input class="pl-10 rounded h-10 w-full focus:outline-none bg-gray-200 focus:bg-gray-300" type="text" />
                </div>
            </div>
            <ul class="flex flex-col mt-4 space-y-2 overflow-y-auto" style={{height:'300px'}}>
                <li class="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded">
                    <div class="absolute flex items-center justify-center h-full right-0 top-0 mr-2">
                        <span class="flex items-center justify-center shadow bg-blue-600 h-6 w-6 text-xs rounded-full text-white">2</span>
                    </div>
                    <div class="relative flex-shrink-0">
                        <span class="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
                        <a href="#" class="flex rounded-full w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="flex flex-col ml-4">
                        <h3 class="font-bold">John Doe</h3>
                        <p class="text-sm text-gray-600">Hey, how are you today?</p>
                    </div>
                </li>
                <li class="flex flex-row items-center relative bg-gray-200 hover:bg-gray-100 p-2 rounded">
                    <div class="absolute flex items-center justify-center h-full right-0 top-0 mr-2">
                        <span class="flex items-center justify-center shadow bg-blue-600 h-6 w-6 text-xs rounded-full text-white">4</span>
                    </div>
                    <div class="relative flex-shrink-0">
                        <span class="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
                        <a href="#" class="flex rounded-full w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="flex flex-col ml-4">
                        <h3 class="font-bold">Zac Wayne</h3>
                        <p class="text-sm text-gray-600">Hey, how are you today?</p>
                    </div>
                </li>
                <li class="flex flex-row items-center relative hover:bg-gray-100 p-2 rounded">
                    <div class="absolute flex items-center flex-row space-x-1 right-0 top-0 mr-2 h-full">
                        <span class="block rounded-full h-2 w-2 bg-gray-300"></span>
                        <span class="block rounded-full h-2 w-2 bg-gray-400"></span>
                        <span class="block rounded-full h-2 w-2 bg-gray-500"></span>
                    </div>
                    <div class="relative flex-shrink-0">
                        <span class="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
                        <a href="#" class="flex rounded-full w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="flex flex-col ml-4">
                        <h3 class="font-bold">Amina Mkalcha</h3>
                        <p class="text-sm text-gray-600">Wach omri cava?</p>
                    </div>
                </li>
                <li class="flex flex-row items-center relative hover:bg-gray-100 p-2 rounded">
                    <div class="relative flex-shrink-0">
                        <span class="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
                        <a href="#" class="flex rounded-full w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="flex flex-col ml-4">
                        <h3 class="font-bold">Houari boualem</h3>
                        <p class="text-sm text-gray-600">Kash jdid walla walou!</p>
                    </div>
                </li>
                <li class="flex flex-row items-center relative hover:bg-gray-100 p-2 rounded">
                    <div class="relative flex-shrink-0">
                        <span class="absolute right-0 top-0 border-2 border-white mt-px mr-px flex items-center justify-center h-4 w-4 rounded-full bg-green-500"></span>
                        <a href="#" class="flex rounded-full w-16 h-16">
                            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="flex flex-col ml-4">
                        <h3 class="font-bold">Hamid Imad</h3>
                        <p class="text-sm text-gray-600">Tessema fiha</p>
                    </div>
                </li>
            </ul>
            <div class="flex flex-row items-center justify-around mt-4 bg-gray-100 p-4">
                <div class="flex text-gray-600">
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                </div>
                <div class="flex text-gray-600">
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fill-rule="evenodd"
                            d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div class="flex text-gray-600">
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div> */}

<section class="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
    <div class="h-full">
        
        <div class="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
            
            <header class="pt-6 pb-4 px-5 border-b border-gray-200">
                <div class="flex justify-between items-center mb-3">
                    
                    <div class="flex items-center">
                        <a class="inline-flex items-start mr-3" href="#0">
                            <img class="rounded-full" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg" width="48" height="48" alt="Lauren Marsano" />
                        </a>
                        <div class="pr-1">
                            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                <h2 class="text-xl leading-snug font-bold">Lauren Marsano</h2>
                            </a>
                            <a class="block text-sm font-medium hover:text-indigo-500" href="#0">@lauren.mars</a>
                        </div>
                    </div>
                    
                    <div class="relative inline-flex flex-shrink-0">
                        <button class="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                            <span class="sr-only">Settings</span>
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="flex flex-wrap justify-center sm:justify-start space-x-4">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                        </svg>
                        <span class="text-sm whitespace-nowrap ml-2">Milan, IT</span>
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                        </svg>
                        <a class="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">carolinmcneail.com</a>
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
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg" width="32" height="32" alt="Nhu Cassel" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Nhu Cassel</h4>
                                <div class="text-[13px]">Hello Lauren 👋, · 24 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg" width="32" height="32" alt="Patrick Friedman" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Patrick Friedman</h4>
                                <div class="text-[13px]">Yes, you’re right but… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Byrne McKenzie</h4>
                                <div class="text-[13px]">Hey Lauren ✨, first of all… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    
                    <button class="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div class="flex items-center">
                            <img class="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg" width="32" height="32" alt="Scott Micheal" />
                            <div>
                                <h4 class="text-sm font-semibold text-gray-900">Scott Micheal</h4>
                                <div class="text-[13px]">No way 🤙! · 11 Mar</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            
            <button class="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                <svg class="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                    <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                </svg>
                <span>New Chat</span>
            </button>
        </div>
    </div>
</section>



          </div>
     );
};

export default ChatBox;