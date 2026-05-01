import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoursesCard = ({ course }) => {
  return (
    <div>
      <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-800">
        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Level badge */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
            {course.level}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            By {course.instructor}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            {/* <Star></Star> */}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {course.rating}
            </span>
          </div>

          {/* Button */}
          <button  className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
             View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
