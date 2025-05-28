import LeftHandInfo from './LeftHandInfo';
import RightHandInfo from './RightHandInfo';
import "../Css/DashboardMainContent.css"

const DashboardMainContent = () => {
  return (
    <div className="responsive-container">
      <LeftHandInfo/>
      <RightHandInfo/>
    </div>
  );
};

export default DashboardMainContent;