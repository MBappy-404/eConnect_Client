import React from 'react';

const Video = () => {
     return (
          <div className='py-10 flex justify-center'>
               <div class="grid grid-cols-1 w-full md:w-[750px] lg:w-[500px] px-2">

                    <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }} >
                         <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9 relative mt-5 w-full overflow-hidden" style={{ paddingTop: "56.25%" }} >
                    <iframe src="https://www.facebook.com/plugins/video.php?height=507&href=https%3A%2F%2Fweb.facebook.com%2Fthedogefamily%2Fvideos%2F989674231582377%2F&show_text=false&width=560&t=0"  style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" 
                    className='absolute top-0 right-0 bottom-0 left-0 w-full h-full'
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9  mt-5 relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }} >
                    <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Fthedogefamily%2Fvideos%2F1493207141202147%2F&show_text=false&width=476&t=0"  style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" 
                    className='absolute top-0 right-0 bottom-0 left-0 w-full h-full'
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9  mt-5 relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }} >
                    <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Fthedogefamily%2Fvideos%2F2279642945547616%2F&show_text=false&width=476&t=0"  style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" 
                    className='absolute top-0 right-0 bottom-0 left-0 w-full h-full'
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                    </div>
                    
               </div>
          </div>
     );
};

export default Video;