import DashboardOverview from "../DashboardOverview/DashboardOverview";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import CalendarView from "../CalendarView/CalendarView";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../styles/Dashboard.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard flex">
      <div className="dashboard-left flex">
        <div className="dashboard-heading-div flex">
          <h2 className="dashboard-heading">Dashboard</h2>
          <p className="dashboard-subHeading">
            This Week
            <span className="dashboard-heading-icon">
              <MdKeyboardArrowDown />
            </span>
          </p>
        </div>
        <DashboardOverview />
        <div className="dashboard-activity">
          <ActivityFeed />
        </div>
      </div>

      <div className="dashboard-right flex">
        <div className="dashboard-right-top">
          <CalendarView />
        </div>
        <div className="dashboard-right-bottom max-h-w">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
