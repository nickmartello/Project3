import React, { Component } from "react";
import ScheduleDay from "./ScheduleDay.js";
import plans from "./plans.json";
import "./Schedule.css";
import ScheduleItem from "./ScheduleItem.js"
class Schedule extends Component {
  state = {
    plans
  };
  render() {
    return (
      <table className="table calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              {this.state.plans.map(plans => (
                <tr>
                  <td>
                    <ScheduleItem
                      day={plans.day}
                      category={plans.category}
                      title={plans.title}
                      desc={plans.desc}
                    />
                  </td>
                </tr>
              ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Schedule;
