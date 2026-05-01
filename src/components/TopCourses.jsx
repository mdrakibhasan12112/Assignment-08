import React from 'react';
import CoursesCard from './CoursesCard';

const TopCourses = async () => {
  const res = await fetch('https://assignment-08-mu.vercel.app/data.json');
  const data = await res.json();
  const topCourses = data.slice(0, 6);
  console.log(topCourses);

  return (
    <div>
      <h2 className="text-3xl font-bold mt-5">Top Populer Courses</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {topCourses.map(course => (
          <CoursesCard key={course.id} course={course}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;
