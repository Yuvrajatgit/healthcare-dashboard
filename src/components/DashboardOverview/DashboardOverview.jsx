import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import "../../styles/Dashboard.css";

const DashboardOverview = () => {
  return (
    <div className="anatomy-section-wrapper">
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;
