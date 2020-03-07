import React from "react";

const Plan = ({ day, title, desc, start, duration, category, css }) => {
  return (
    <div
      className={css}
      data-day={day}
      start-time={start}
      duration={duration}
      category={category}
    >
      <p className="plan-title">{title}</p>
      {/* <p className="plan-desc">{desc}</p> */}
    </div>
  );
};

export default Plan;