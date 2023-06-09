import React from 'react';
import SideBar from './Sidebar/index';

// Interface
interface SidebarProps {
  children: React.ReactNode;
}

const Layout: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="sidebar text-[white] text-[30px]">
        <SideBar />
      </div>
      <main className="flex-1 bg-[#000000]">{children}</main>
    </div>
  );
};

export default Layout;
