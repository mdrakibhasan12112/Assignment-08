'use client';
import Link from 'next/link';
import { Button } from '@heroui/react';
import React from 'react';

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-2xl">Learning Platform</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={'/'} className="text-lg font-bold">
              Home
            </Link>
          </li>

          <li>
            <Link href={'/courses'} className="text-lg font-bold">
              Courses
            </Link>
          </li>
          <li>
            <Link href={'/profile'} className="text-lg font-bold">
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <Button variant='primary'>
            <Link href={'/signup'}>SignUp</Link>
          </Button>
          <Button variant="primary">
            <Link href={'/signin'}>SignIn</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
