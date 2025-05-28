import React from 'react';
import '../Css/LeftHandInfo.css';
import Img1 from "../assets/body.avif"
import ActivityChart from './ActivityChart';
import { activityData, healthStats } from '../data/healthData';

const LeftHandInfo = () => {

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <input type="text" style={{width:"80%"}} placeholder="Search" />
        <span className="notification-icon">🔔</span>
      </header>
      <h4 className='dash-text'>Dashboard</h4>
      <div className="dashboard-content">
        <div className="body-section">
          <img src={Img1} alt="Body" className="body-image" />
          <div className="label heart">❤️ Healthy Heart</div>
          <div className="label leg">⚡ Healthy Leg</div>
        </div>

        <div className="health-cards">
          {healthStats.map((stat, idx) => (
            <div key={idx} className="health-card">
              <div className="card-header">
                <span className="icon">{stat.icon}</span>
                <div>
                  <div className="title">{stat.title}</div>
                  <div className="date">Date: {stat.date}</div>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${stat.progress}%`, backgroundColor: stat.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="activity-section">
        <div className="activity-chart">
          {activityData.map((val, idx) => (
            <div key={idx} className="bar" style={{ height: `${val}%` }} />
          ))}
        </div>
      </div>
      <ActivityChart/>
    </div>
  );
};

export default LeftHandInfo;
