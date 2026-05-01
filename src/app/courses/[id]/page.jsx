import React from 'react';
import Image from 'next/image';
import { Star, Clock, BookOpen, Layers } from 'lucide-react';

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://assignment-08-mu.vercel.app/data.json');
  const courses = await res.json();
  const course = courses.find(c => c.id == id);
  console.log(course);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* LEFT: Image */}
        <div className="relative h-[300px] lg:h-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />

          {/* Floating badge */}
          <span className="absolute top-5 left-5 bg-blue-600 text-white text-xs px-4 py-1 rounded-full shadow-lg">
            {course.category}
          </span>
        </div>

        {/* RIGHT: Content */}
        <div className="p-6 lg:p-10 flex flex-col justify-between">
          {/* Top */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
              {course.title}
            </h2>

            <p className="text-gray-500 dark:text-gray-400">
              Instructor:{' '}
              <span className="font-medium">{course.instructor}</span>
            </p>

            {/* Info Row */}
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <div className="flex items-center gap-1 text-yellow-500 font-medium">
                <Star size={16} fill="currentColor" />
                {course.rating}
              </div>

              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                <Clock size={16} />
                {course.duration}
              </div>

              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                <Layers size={16} />
                {course.level}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-2">
              {course.description}
            </p>

            
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition">
              🚀 Enroll Now
            </button>

            <button className="flex-1 border border-gray-300 dark:border-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
