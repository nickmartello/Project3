import React from "react";
import { Link } from "react-router-dom";

const Plan = ({ day, title, desc, start, duration, category, css }) => {
  let translateTime = num => {
    if(num < 12){
      return `${num}:00am`
    } else if (num > 12){
      return `${num -12}:00pm`
    }
  };

  return (
    <Link to="/plan/:id">
    <div
      className={css}
      data-day={day}
      start-time={start}
      duration={duration}
      category={category}
      >
      <p className="plan-title">{title}</p>
      <p className="time">{translateTime(start)}-{translateTime(start+duration)}</p>
    </div>
    </Link>
  );
};

export default Plan;
