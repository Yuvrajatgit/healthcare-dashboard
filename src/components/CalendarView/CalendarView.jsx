import "../../styles/CalendarView.css";
import calendarAppointments, {
  calendarEventCards,
} from "../../data/calendarAppointments";
import SimpleAppointmentCard from "../../utils/SimpleAppointmentCard";
import { RiArrowRightFill } from "react-icons/ri";
import { RiArrowLeftFill } from "react-icons/ri";
import { GoDash } from "react-icons/go";

const CalendarView = () => {
  let visibleAppointments = calendarAppointments;

  const width = window.innerWidth;
  if (width <= 480) {
    visibleAppointments = calendarAppointments.slice(0, 4);
  } else if (width <= 768) {
    visibleAppointments = calendarAppointments.slice(0, 5);
  }
  return (
    <div className="calendar-card max-h-w">
      <div className="calendar-header">
        <div className="calendar-header-div flex">
          <h4>October 2021</h4>
          <div className="calendar-icons">
            <RiArrowLeftFill size={18} color="#39358d" />
            <RiArrowRightFill size={18} color="#39358d" />
          </div>
        </div>
        <div className="calendar-days">
          {visibleAppointments.map((day, i) => (
            <div
              key={i}
              className={`calendar-day ${day.isActive ? "active-day" : ""} ${
                day.disabled ? "disabled-day" : ""
              }`}
            >
              <div className="calendar-day-label">{day.name}</div>
              <div className="calendar-date">{day.date}</div>
              <div className="calendar-times">
                {day.times.map((time, j) => (
                  <span
                    key={j}
                    className={`time-block ${
                      time.highlight
                        ? time.highlight === "gray"
                          ? "highlight gray"
                          : "highlight"
                        : ""
                    }`}
                  >
                    {time.label === "-" ? (
                      <GoDash size={13} color="#abb0db" />
                    ) : (
                      time.label
                    )}
                    {time.showDot && <span className="dot" />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-events">
        {calendarEventCards.map((item, index) => (
          <SimpleAppointmentCard
            key={index}
            title={item.title}
            icon={item.icon}
            time={item.time}
            doctor={item.doctor}
            bgColor={item.bgColor}
            color={item.color}
            width={item.width}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
