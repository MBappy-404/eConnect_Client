import React from 'react';
import './Room.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const JoinRoom = () => {

     const navigate = useNavigate()
     let captcha;
     let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
     // console.log(alphabets.length);

     const generate = () => {
          // console.log(status)

          let first = alphabets[Math.floor(Math.random() * alphabets.length)];
          let second = Math.floor(Math.random() * 10);
          let third = Math.floor(Math.random() * 10);
          let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
          let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
          let sixth = Math.floor(Math.random() * 10);
          captcha = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString() + sixth.toString();
          // console.log(captcha);
          document.getElementById('generated-captcha').value = captcha;
          
     }

     const handleCheck = () => {
          // console.log(status)
          let userValue = document.getElementById("entered-captcha").value;
          if (userValue === '') { return toast.warning('Please fill input') }
          // console.log(captcha);
          // console.log(userValue);
          if (userValue === captcha) {
               // status.innerText = "Correct!!"
               document.getElementById('zoom-in').classList.add('zoom-in')
               toast.success('Successfully joined Room')
               document.getElementById("entered-captcha").value = '';
               // animated entered room 
               let count = 0;
               function incrementCounter() {
                    count++;
                    if(count === 1){
                         return  navigate('/room')
                    }
               }

               setInterval(incrementCounter, 1000);
          } else {
                
               toast.warning('Invalid Captcha!!')
               document.getElementById("entered-captcha").value = '';
          }
     }

     return (
          <div onMouseEnter={generate} className='flex mt-20 mb-5 md:mt-14 lg:mt-0 md:mb-0 md:py-5 px-2  justify-center'>
               <div id='zoom-in'  className='top w-full overflow-hidden py-44 2xl:mb-20 2xl:w-[600px] rounded-xl -mb-5  md:w-[750px] mx-auto  lg:w-[500px]' >
                    <div class="wrapper"></div>
                    <h1 className='text-2xl text-gray-500 font-extrabold mb-10'>Verify I'm Not Robot</h1>
                    <h2 id="status" style={{ color: "#ee7e6a" }}> </h2>
                    <div>
                         <input type="text" className='cursor-not-allowed' readOnly id="generated-captcha" />
                    </div>
                    <div>
                         <input type="text" id="entered-captcha" className='mt-2' placeholder="Enter the captcha.." />
                    </div>
                    <button className='check   mt-2' id='join' type="button" onClick={handleCheck}>
                         Join Chat Room 
                    </button>
                    <button type="button" className='check text-black bg-blue-500  animate-pulse' onClick={generate} id="gen">
                         Change Captcha
                    </button>
               </div>
          </div>
     );
};

export default JoinRoom;