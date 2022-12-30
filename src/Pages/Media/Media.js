import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ShowPost from './ShowPost';


const Media = () => {
    
     const {data: post = [], refetch  } = useQuery({
          queryKey:['post'],
          queryFn: async()=>{
               const res = await fetch('https://e-somaz-server.vercel.app/post');
               const data = await res.json();
               return data;
               
          }
     })
     return (


         <div className=''>
           <main class="h-full w-full py-24 grid grid-cols-1 px-2">
               
               {
                post.map(publicPost => <ShowPost
                key={publicPost._id}
                refetch={refetch}
                publicPost={publicPost}
                ></ShowPost>)
               }
                   
                     
      
                </main>
         </div>

     );
};

export default Media;