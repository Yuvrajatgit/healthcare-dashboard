import HealthCard from "../../utils/HealthCard";
import lungsImage from "/assets/images/lungs.png";
import teethImage from "/assets/images/teeth.png";
import boneImage from "/assets/images/bone.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import "../../styles/HealthStatusCards.css";

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards max-h-w">
      <HealthCard
        title="Lungs"
        date="26 Oct 2023"
        image={lungsImage}
        progress={80}
        color="#af4b3e"
      />
      <HealthCard
        title="Teeth"
        date="26 Oct 2021"
        image={teethImage}
        progress={80}
        color="#20d9e4"
      />
      <HealthCard
        title="Bone"
        date="26 Oct 2021"
        image={boneImage}
        progress={80}
        color="#de8368"
      />
      <div className="healthCard-details">
        <a href="#">Details</a>
        <MdOutlineArrowRightAlt />
      </div>
    </div>
  );
};

export default HealthStatusCards;
