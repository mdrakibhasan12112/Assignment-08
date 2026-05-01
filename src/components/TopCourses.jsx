import React from 'react';
import CoursesCard from './CoursesCard';
import Link from 'next/link';

const TopCourses = async () => {
  const res = await fetch('https://assignment-08-mu.vercel.app/data.json');
  const data = await res.json();
  const topCourses = data.slice(0, 6);
  console.log(topCourses);

  return (
    <div>
      <h2 className="text-3xl font-bold my-5">Top Populer Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topCourses.map(course => (
          <CoursesCard key={course.id} course={course}></CoursesCard>
        ))}
      </div>
      <div className='mt-7 text-center items-center '>
        <Link href={'/courses'}>
          <button className=" bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300">
            All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopCourses;
