import React, { Component } from "react";
import plans from "./plans.json";
import ScheduleItem from "./ScheduleItem.js";

class ScheduleDay extends Component {
  state = {
    plans
  };

  render() {
    return (
      <table>
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
      </table>
    );
  }
}

export default ScheduleDay;
