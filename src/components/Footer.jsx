import Link from 'next/link';
import React from 'react';

const Footer = () => {
 return (
   <footer className="bg-gray-900 text-white py-10 mt-10">
     <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8">
       {/* Contact Info */}
       <div>
         <h2 className="text-xl font-semibold mb-3">Contact</h2>
         <p>Rangpur, Bangladesh</p>
         <p>Email: mdrakibhasan12112@gmail.com</p>
         <p>Phone: +880 1845252695</p>
       </div>

       {/* Social Links */}
       <div>
         <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
         <ul className="space-y-2">
           <li>
             <a href="#" className="hover:text-gray-400">
               Facebook
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-gray-400">
               Twitter
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-gray-400">
               LinkedIn
             </a>
           </li>
           <li>
             <a href="#" className="hover:text-gray-400">
               GitHub
             </a>
           </li>
         </ul>
       </div>

       {/* Legal Links */}
       <div>
         <h2 className="text-xl font-semibold mb-3">Legal</h2>
         <ul className="space-y-2">
           <li>
             <Link href="/terms">Terms & Conditions</Link>
           </li>
           <li>
             <Link href="/privacy">Privacy Policy</Link>
           </li>
         </ul>
       </div>
     </div>

     <div className="text-center mt-8 text-gray-400 text-sm">
       © {new Date().getFullYear()} YourSite. All rights reserved.
     </div>
   </footer>
 );
};

export default Footer;