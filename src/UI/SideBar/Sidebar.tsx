import { useState } from "react";
import { FaThLarge, FaCalendarAlt, FaSearch, FaRegMap } from 'react-icons/fa';
import NavItem from "../NavItem/NavItem";

export interface NavData {
  title: string;
  icon: any;
  url: string;
}

const navDatas: NavData[] = [
  {
    title: "Dashboard",
    icon: FaThLarge,
    url: ""
  },
  {
    title: "Calendar",
    icon: FaCalendarAlt,
    url: ""
  },
  {
    title: "Search",
    icon: FaSearch,
    url: ""
  },
  {
    title: "Map",
    icon: FaRegMap,
    url: ""
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsOpen(true);
  }
  const onCloseSidebar = () => {
    setIsOpen(false)
  }
  return (
    <div className="relative" onMouseEnter={onOpenSidebar} onMouseLeave={onCloseSidebar}>
      <div
        className={`fixed top-0 left-0 w-20 h-screen bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "w-60" : ""
        }`}>
        <nav className="h-full">
          <ul className="h-full flex flex-col justify-center">
            {navDatas.map((item: NavData) => {
              return <NavItem key={item.title} icon={item.icon} title={item.title} isOpen={isOpen}/>
            })}

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
