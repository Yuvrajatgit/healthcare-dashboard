import {
  sidebarTopLinks,
  sidebarMiddleLinks,
  sidebarBottomLink,
} from "../../data/navLinks";
import { FaCalendarAlt } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import "../../styles/Sidebar.css";

const iconMap = {
  TbAppsFilled: <TbAppsFilled />,
  PiArrowsDownUpBold: <PiArrowsDownUpBold />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaRegSquarePlus: <FaRegSquarePlus />,
  FcStatistics: <FcStatistics />,
  IoChatbubbleEllipses: <IoChatbubbleEllipses />,
  IoCall: <IoCall />,
  FiSettings: <FiSettings />,
};

const Sidebar = () => {
  return (
    <aside className="sidebar max-h-w flex" aria-label="Sidebar Navigation">
      <div className="sidebar-top flex max-h-w">
        {sidebarTopLinks.map((section) => (
          <div key={section.title} className="sidebar-section">
            <h3 className="sidebar-title">{section.title}</h3>
            <ul className="sidebar-links">
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className={`sidebar-item flex ${
                    link.label === "Dashboard" ? "sidebar-active-link" : ""
                  }`}
                >
                  <span className="icon">{iconMap[link.icon]}</span>
                  <span className="label">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sidebar-middle flex max-h-w">
        {sidebarMiddleLinks.map((section) => (
          <div key={section.title} className="sidebar-section">
            <h3 className="sidebar-title">{section.title}</h3>
            <ul className="sidebar-links">
              {section.links.map((link) => (
                <li key={link.label} className="sidebar-item flex">
                  <span className="icon">{iconMap[link.icon]}</span>
                  <span className="label">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom flex max-h-w">
        <ul className="sidebar-links">
          <li className="sidebar-item">
            <span className="icon">{iconMap[sidebarBottomLink.icon]}</span>
            <span className="label">{sidebarBottomLink.label}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
