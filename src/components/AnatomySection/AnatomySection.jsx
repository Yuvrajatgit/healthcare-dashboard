import anatomyImage from "/assets/images/anatomyImage.png";
import "../../styles/AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-card">
      <img src={anatomyImage} alt="Human Anatomy" className="anatomy-img" />
      <div className="floating-box heart">
        <span className="floating-box-image">❤️</span>
        <span className="label">Healthy Heart</span>
      </div>
      <div className="floating-box leg">
        <span className="floating-box-image">🦵🏻</span>
        <span className="label">Healthy Leg</span>
      </div>
    </div>
  );
};

export default AnatomySection;
