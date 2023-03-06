import React, { useState } from 'react';

function ChatGPTCal() {
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (year, month, day) => {
    return new Date(year, month, day).getDay();
  };

  const renderDaysInMonth = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfWeek = getDayOfWeek(year, month, 1);

    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty${i}`} className="empty" />);
      console.log(days);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div key={i} className="day">{i}</div>);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>Prev</button>
        <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">
        {renderDaysInMonth()}
      </div>
    </div>
  );
}

export default ChatGPTCal;