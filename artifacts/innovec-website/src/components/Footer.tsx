import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block bg-white p-2 rounded-md mb-6">
              <img src="/innovec-logo.jpg" alt="INNOVEC Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm mb-6 max-w-xs">
              Engineering Sustainable Infrastructure Since 2020. Water • Wastewater • Fisheries & Aquaculture.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white text-sm transition-colors">Projects</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white text-sm transition-colors">Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Core Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Water Supply Design</li>
              <li className="text-gray-300 text-sm">Wastewater Treatment</li>
              <li className="text-gray-300 text-sm">Storm Water Drainage</li>
              <li className="text-gray-300 text-sm">Fisheries & Aquaculture</li>
              <li className="text-gray-300 text-sm">Solid Waste Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 font-montserrat">Contact Info</h3>
            <ul className="space-y-4">
              <li className="text-gray-300 text-sm flex items-start">
                <span className="font-semibold text-white mr-2 block w-20">Address:</span>
                <span>6/4D Model Town,<br/>Lahore, Pakistan</span>
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="font-semibold text-white mr-2 block w-20">Phone:</span>
                <span>0321-4175330</span>
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <span className="font-semibold text-white mr-2 block w-20">Email:</span>
                <a href="mailto:ceo.innovec@gmail.com" className="hover:text-white transition-colors">ceo.innovec@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; 2025 INNOVEC (Private) Limited. All Rights Reserved.
          </p>
          <div className="text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full">
            PEC: CONSULT/2700
          </div>
        </div>
      </div>
    </footer>
  );
}
