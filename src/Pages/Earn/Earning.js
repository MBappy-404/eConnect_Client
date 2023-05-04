import React from 'react';

const Earning = () => {
     return (
          <div>
               <div class="bg-white py-2 -mb-5 mt-14 md:mt-0">
                    <div class="w-full">
                         <div class="border-b">
                              <div class="my-4 px-6">
                                   <h2 class="font-semibold text-2xl">My Wallet</h2>
                              </div>
                         </div>
                         <div class="px-8 py-2">
                              <h4 class="text-lg text-gray-500 font-thin">Your Balance</h4>
                              <h4 class="text-2xl font-semibold">$00.00</h4>
                         </div>
                         <div class="flex space-x-0 flex-col lg:flex-row lg:space-x-2 my-2 px-6">
                              <div class="bg-green-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center">
                                   <h1 class="text-xl font-light">INCOME</h1>
                                   <h1 class="text-2xl text-green-100 font-semibold">$00.00</h1>
                              </div>
                              <div class="bg-red-600 p-4 border-2 rounded-md shadow-lg  w-full text-white text-center">
                                   <h1 class="text-xl font-light">Withdraw</h1>
                                   <h1 class="text-2xl text-red-100 font-semibold">$00.00</h1>
                              </div>
                         </div>
                         <div class="px-8 my-6">
                              <div class="my-4 border-b w-full">
                                   <h2 class="font-semibold text-lg">Earning Category</h2>
                              </div>
                              <div class="ml-3 relative bg-white p-4 shadow-md my-4 border-l-8 border-blue-500  align-middle flex justify-between">
                                   <div>
                                        <p>Ads</p>
                                   </div>
                                   <div>
                                        <p>$00</p>
                                   </div>
                                   <div>
                                        {/* open modal  */}
                                        <p><a href="#my-modal-0" className="btn btn-sm bg-green-600 border-none -mb-2">Start</a></p>
                                        {/* modal body  */}
                                        <div className="modal" id="my-modal-0">
                                             <div className="modal-box">
                                                  <h3 className="font-bold text-lg">View Ads</h3>
                                                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                  <div className="modal-action">
                                                       <a href="#" className="btn">Yay!</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                              <div class="ml-3 relative bg-white p-4 border-l-8 border-blue-500 shadow-md my-4 flex justify-between  ">

                                   <div>
                                        <p>Quiz</p>
                                   </div>
                                   <div>
                                        <p>$00</p>
                                   </div>
                                   <div>
                                        <p><a href="#my-modal-1" className="btn btn-sm bg-green-600 border-none -mb-2">Start</a></p>
                                        <div className="modal" id="my-modal-1">
                                             <div className="modal-box">
                                                  <h3 className="font-bold text-lg">Quiz</h3>
                                                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                  <div className="modal-action">
                                                       <a href="#" className="btn">Yay!</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="ml-3 relative bg-white p-4 border-l-8 border-blue-500 shadow-md my-4 flex justify-between ">

                                   <div>
                                        <p>Blog</p>
                                   </div>
                                   <div>
                                        <p>$00</p>
                                   </div>
                                   <div>
                                        <p><a href="#my-modal-3" className="btn btn-sm bg-green-600 border-none -mb-2">Start</a></p>
                                        <div className="modal" id="my-modal-3">
                                             <div className="modal-box">
                                                  <h3 className="font-bold text-lg">Read Article</h3>
                                                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                  <div className="modal-action">
                                                       <a href="#" className="btn">Yay!</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="px-8 my-6">
                              <div class="my-4 border-b w-full">
                                   <h2 class="font-semibold text-lg">Transaction</h2>
                              </div>
                              <div class="bg-white p-4 border-2 rounded-md">
                                   <div class="mt-4">
                                   <div class="my-5 text-sm">
                                             <label htmlFor="amount" class="block text-black">
                                                  Account
                                             </label>
                                             <select name="" id="" className='rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full'> 
                                                  <option value="">PayPal</option>
                                                  <option value="">Bkash</option>
                                             </select>
                                        </div>
                                        <div class="my-5 text-sm">
                                             <label htmlFor="text" class="block text-black">Amount</label>
                                             <input type="text" autoFocus
                                                  class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
                                                  placeholder="Enter Amount" />
                                        </div>
                                       
                                        <div class="my-5">
                                             <button class="rounded-sm block text-center text-white bg-blue-600 p-3 duration-300  hover:bg-blue-800 w-full">
                                                  Add Transaction
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Earning;