import React from 'react';
import '../Css/ActivityChart.css';
import { activityData, days } from '../data/activityData';

const ActivityChart = () => {

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointments on this week</span>
      </div>
      <div className="activity-chart">
        {activityData.map((bars, idx) => (
          <div key={idx} className="day-group">
            <div className="bars">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="day-label">{days[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
