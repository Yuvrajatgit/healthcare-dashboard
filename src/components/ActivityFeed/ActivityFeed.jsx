import { days, barFills } from "../../data/activityFeed";
import "../../styles/ActivityFeed.css";

const ActivityFeed = () => {
  let visibleDays = days;
  let visibleBars = barFills;

  const width = window.innerWidth;
  if (width <= 480) {
    visibleDays = days.slice(0, 4);
    visibleBars = barFills.slice(0, 4);
  } else if (width <= 768) {
    visibleDays = days.slice(0, 5);
    visibleBars = barFills.slice(0, 5);
  }
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 Appointments on this week</p>
      </div>
      <div className="activity-chart">
        {visibleDays.map((day, index) => (
          <div className="day-block" key={index}>
            <div className="lines">
              <div className={`line full ${visibleBars[index].full}`}></div>
              <div className={`line middle ${visibleBars[index].middle}`}></div>
              <div className="line split line-margin">
                <div
                  className={`half-line ${visibleBars[index].split[0]}`}
                ></div>
                <div
                  className={`half-line ${visibleBars[index].split[1]}`}
                ></div>
              </div>
              <div className={`line bottom ${visibleBars[index].bottom}`}></div>
            </div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ActivityFeed;
