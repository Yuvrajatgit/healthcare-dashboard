import Button from "../../utils/Button";
import { FaBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { HiPlus } from "react-icons/hi";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header-sticky">
      {/*Header Left Section which displays the logo*/}
      <div className="header-left-section max-h-w flex">
        <h1 className="header-title">
          <span className="header-title-firstHalf">Health</span>
          <span className="header-title-secondHalf">care.</span>
        </h1>
      </div>

      {/* Header Right Section with Search and Buttons */}
      <div className="header-right-section max-h-w flex">
        <div className="header-center">
          <div className="search-wrapper flex">
            <div className="search-box flex">
              <LuSearch size={24} className="search-icon" />
              <input
                className="search-input"
                type="text"
                placeholder="Search"
                disabled
              />
            </div>
            <Button
              icon={<FaBell size={18} color="#39358d" />}
              bgColor="#ffffff"
              className="header-btns"
            />
          </div>
        </div>

        {/* Header Right Section with Buttons */}
        <div className="header-right">
          <div className="button-group max-h-w flex">
            <Button
              imgSrc="../assets/images/avatar.png"
              bgColor="#20d9e4"
              width="2.6rem"
              height="2.6rem"
              className="header-btns"
            />
            <Button
              icon={<HiPlus size={18} color="#ffffff" />}
              bgColor="#39358d"
              width="2.6rem"
              height="2.6rem"
              className="header-btns"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
