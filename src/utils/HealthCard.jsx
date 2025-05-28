import "../../src/styles/HealthStatusCards.css";

const HealthCard = ({ title, date, image, progress, color }) => {
  return (
    <div className="health-card">
      <div className="card-top">
        <img src={image} alt={title} className="health-icon" />
        <h4 className="card-title">{title}</h4>
      </div>
      <p className="card-date">{`Date: ${date}`}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default HealthCard;
