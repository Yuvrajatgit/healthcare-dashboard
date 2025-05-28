import "../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({
  title,
  time,
  icon,
  doctor,
  width = "100%",
  height = "auto",
  bgColor = "#e0e7ff",
  color,
}) => {
  return (
    <div
      className="appointment-card"
      style={{ width, height, backgroundColor: bgColor, color: color }}
    >
      <div className="appointment-title">
        <h4 style={{ color: color }}>{title}</h4>
        <span className="appointment-icon">{icon}</span>
      </div>
      <p className="appointment-time" style={{ color: color }}>
        {time}
      </p>
      {doctor && (
        <p className="appointment-doctor" style={{ color: color }}>
          {doctor}
        </p>
      )}
    </div>
  );
};

export default SimpleAppointmentCard;
