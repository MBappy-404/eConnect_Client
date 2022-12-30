import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/Auth';
import About from '../About/About';

const Profile = () => {

     const {user} = useContext(AuthContext);

     return (
          <div>
               
<div class="w-full relative  px-3   md:px-10 pt-16 overflow-hidden">
  <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
    <img src={user?.photoURL} alt="" class="bg w-full h-full object-cover object-center absolute z-0"/>
    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
      <img src={user?.photoURL} class="h-24 w-24 object-cover rounded-full"/>
      <h1 class="text-2xl font-semibold">{user?.displayName}</h1>
      {/* <h4 class="text-sm font-semibold">Joined Since '19</h4> */}
    </div>
  </div>
  <div class="grid grid-cols-12 bg-white ">

    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

      <a href="#" class="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</a>

      <a href="#" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Information</a>

      <label htmlFor="my-modal-6"  class="text-sm cursor-pointer p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Edit Profile</label>

      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    { <About></About> }
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn ">Update</label>
    </div>
  </div>
</div>

    </div>

    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">

          <div>
            <h3 class="text-2xl font-semibold mb-2">Basic Information</h3>
            <hr/>
          </div>

          <div class="form-item">
            <label class="text-xl ">Name :</label>
            <input type="text" value={user?.displayName} class="w-60 ml-3 bg-gray-200  rounded  py-1 px-2  mr-2 " disabled/>
          </div>

          

            <div class="form-item w-full">
              <label class="text-xl ">Username :</label>
              <input type="text" value={user?.displayName} class="w-60 ml-3 bg-gray-200  py-1 px-2 mr-2  rounded  " disabled/>
            </div>

            <div class="form-item w-full">
              <label class="text-xl ">Email :</label>
              <input type="text" value={user?.email} class="w-60 ml-3 bg-gray-200 rounded py-1 px-2 mr-2  " disabled/>
            </div>
         

          <div>
          <h3 class="text-2xl font-semibold mb-2">Bio</h3>
            <hr/>
          </div>

          <div class="form-item w-full">
            <label class="text-xl "></label>
            <textarea cols="30" rows="10" class="w-full bg-gray-200 rounded  py-1 px-2 mr-2  " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
          </div>

          <div>
            <h3 class="text-2xl font-semibold mb-2">My Social Media</h3>
            <hr/>
          </div>

          <div class="form-item">
            <label class="text-xl ">Instagram</label>
            <input type="text" value="https://instagram.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled/>
          </div>
          <div class="form-item">
            <label class="text-xl ">Facebook</label>
            <input type="text" value="https://facebook.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled/>
          </div>
          <div class="form-item">
            <label class="text-xl ">Twitter</label>
            <input type="text" value="https://twitter.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " disabled/>
          </div>

        </form>
      </div>
    </div>


  </div>
</div> 
          </div>
     );
};

export default Profile;