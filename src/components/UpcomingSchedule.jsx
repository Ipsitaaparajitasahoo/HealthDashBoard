import React from 'react';
import '../Css/UpcomingSchedule.css';
import { scheduleData } from '../data/upcomingAppointments';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      {/* <h2 className="section-title">The Upcoming Schedule</h2> */}
      {scheduleData.map((block, index) => (
        <div key={index}>
          <p className="schedule-day">{block.day}</p>
          <div className="schedule-items">
            {block.items.map((item, i) => (
              <div key={i} className="schedule-card">
                <div className="card-header">
                  <span>{item.title}</span>
                  <span className="emoji">{item.emoji}</span>
                </div>
                <p className="card-time">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
