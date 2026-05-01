import CoursesCard from '@/components/CoursesCard';
import React from 'react';

const AllCoursesPage = async () => {
  const res = await fetch('https://assignment-08-mu.vercel.app/data.json');
  const data = await res.json();

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map(course => (
          <CoursesCard key={course.id} course={course}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
