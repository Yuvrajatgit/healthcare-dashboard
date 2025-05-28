import "../../styles/UpcomingSchedule.css";
import SimpleAppointmentCard from "../../utils/SimpleAppointmentCard";
import upcomingAppointments from "../../data/upcomingAppointments";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h4 className="section-title">The Upcoming Schedule</h4>

      {upcomingAppointments.map((group, index) => (
        <div key={index} className="day-group">
          <p className="day-label">On {group.day}</p>
          <div className="appointment-list">
            {group.appointments.map((appt, i) => (
              <SimpleAppointmentCard
                key={i}
                title={appt.title}
                icon={appt.icon}
                time={appt.time}
                width={appt.width}
                color={appt.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
