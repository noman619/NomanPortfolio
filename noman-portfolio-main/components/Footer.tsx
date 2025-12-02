import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} M. Noman. All rights reserved.</p>
        {/* <div className="flex gap-6 mt-4 md:mt-0">
          <p>Built with React, Tailwind & Framer Motion</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;