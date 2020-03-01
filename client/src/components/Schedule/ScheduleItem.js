import React from "react";
const ScheduleItem = ({ title, desc, category, day }) => {

  return (
    <div className="scheduleItem" data-category={category} data-day={day}>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
};
export default ScheduleItem;
