'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
 return (
   <div className="w-full h-[80vh] mt-5">
     <Swiper
       modules={[Autoplay]}
       autoplay={{ delay: 3000 }}
       loop={true}
       className="h-full"
     >
       {/* Slide 1 */}
       <SwiperSlide>
         <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
           <div className="text-center px-5">
             <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Upgrade Your Skills Today 🚀
             </h1>
             <p className="text-lg md:text-xl mb-6">
               Learn from industry experts and boost your career.
             </p>
             <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
               Explore Courses
             </button>
           </div>
         </div>
       </SwiperSlide>

       {/* Slide 2 */}
       <SwiperSlide>
         <div className="h-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white">
           <div className="text-center px-5">
             <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Learn Anytime, Anywhere 🌍
             </h1>
             <p className="text-lg md:text-xl mb-6">
               Access courses on web, design, marketing & more.
             </p>
             <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
               Start Learning
             </button>
           </div>
         </div>
       </SwiperSlide>

       {/* Slide 3 */}
       <SwiperSlide>
         <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white">
           <div className="text-center px-5">
             <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Build Real-World Skills 💼
             </h1>
             <p className="text-lg md:text-xl mb-6">
               Hands-on projects to make you job-ready.
             </p>
             <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
               View Programs
             </button>
           </div>
         </div>
       </SwiperSlide>
     </Swiper>
   </div>
 );
};

export default Banner;