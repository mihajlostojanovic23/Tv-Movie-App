import React from 'react';
import SideBar from '../../SideBar';

// Interface
interface SidebarProps {
  children: React.ReactNode;
}

const Layout: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex'>
      <div
        className="sidebar  w-[300px] text-[white] text-[30px]"
      >
        <SideBar/>
      </div>
      <main  className='flex-1'>{children}</main>
    </div>
  );
};

export default Layout;
