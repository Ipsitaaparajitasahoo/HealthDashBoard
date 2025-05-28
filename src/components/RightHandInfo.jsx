import React from 'react';
import '../Css/RightData.css';
import UpcomingSchedule from './UpcomingSchedule';

const RightHandInfo = () => {
    return (
        <div className="dashboard-container">
            <div className='head'>
                <div className="avatar-button emoji-button">
                    <span role="img" aria-label="avatar">👨‍🦱</span>
                </div>
                <div className="avatar-button plus-button">
                    <span>+</span>
                </div>

            </div>
            <div className="calendar-section">
                <div className="calendar-header">
                    <h3 className='date'>October 2021</h3>
                    <div className="calendar-controls">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
                <div className="calendar-grid">
                    {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={index} className="calendar-day">
                            <span>{day}</span>
                            <div className="calendar-dates">
                                <span>{25 + index}</span>
                                <div className="calendar-times">
                                    <span>10:00</span>
                                    <span>11:00</span>
                                    <span>12:00</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="appointments">
                    <div className="appointment-card dentist">
                        <h4>Dentist 🦷</h4>
                        <p>09:00–11:00</p>
                        <p>Dr. Cameron Williamson</p>
                    </div>
                    <div className="appointment-card physio">
                        <h4>Physiotherapy 💪</h4>
                        <p>11:00–12:00</p>
                        <p>Dr. Kevin Djones</p>
                    </div>
                </div>
            </div>
          <UpcomingSchedule/>
        </div>
    );
};

export default RightHandInfo;
