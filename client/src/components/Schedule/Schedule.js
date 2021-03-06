import React, { Component } from "react";
import Plan from "./Plan.js";
import "./Schedule.css";
import { Link } from "react-router-dom"
import axios from 'axios';

class Schedule extends Component {
  state = {
    plans: []
  };
  
  componentDidMount(){
    axios.get("http://localhost:4000/todos")
      .then(res => {
        console.log(res)
        this.setState({
          plans: res.data
        })
      })
  }

  render() {
    return (
      <div className="schedContainer">
        <div className="schedDay" day="sun">
          <h2 className="dayHeader">Sun</h2>
          {this.state.plans
            .filter(plans => plans.day === "sun")
            .map(plans => (
              <Plan
                day={plans.day}
                title={plans.title}
                desc={plans.description}
                category={plans.category}
                start={plans.time}
                duration={plans.duration}
                css={plans.category}  
              />
            ))}
        </div>
        <div className="schedDay" day="mon">
          <h2 className="dayHeader">Mon</h2>
          {this.state.plans
            .filter(plans => plans.day === "mon")
            .map(plans => (
              <Plan
              day={plans.day}
              title={plans.title}
              desc={plans.description}
              category={plans.category}
              start={plans.time}
              duration={plans.duration}
              css={plans.category}

              />
              ))}
        </div>
        <div className="schedDay" day="tue">
          <h2 className="dayHeader">Tue</h2>
          {this.state.plans
            .filter(plans => plans.day === "tue")
            .map(plans => (
              <Plan
                day={plans.day}
                title={plans.title}
                desc={plans.description}
                category={plans.category}
                start={plans.time}
                duration={plans.duration}
                css={plans.category}

                />
                ))}
        </div>
        <div className="schedDay" day="wed">
          <h2 className="dayHeader">Wed</h2>
          {this.state.plans
            .filter(plans => plans.day === "wed")
            .map(plans => (
              <Plan
              day={plans.day}
              title={plans.title}
              desc={plans.description}
              category={plans.category}
                start={plans.time}
                duration={plans.duration}
                css={plans.category}

                />
                ))}
        </div>
        <div className="schedDay" day="thu">
          <h2 className="dayHeader">Thu</h2>
          {this.state.plans
            .filter(plans => plans.day === "thu")
            .map(plans => (
              <Plan
              day={plans.day}
              title={plans.title}
              desc={plans.description}
              category={plans.category}
              start={plans.time}
              duration={plans.duration}
              css={plans.category}

              />
              ))}
        </div>
        <div className="schedDay" day="fri">
          <h2 className="dayHeader">Fri</h2>
          {this.state.plans
            .filter(plans => plans.day === "fri")
            .map(plans => (
              <Plan
              day={plans.day}
              title={plans.title}
              desc={plans.description}
              category={plans.category}
              start={plans.time}
              duration={plans.duration}
              css={plans.category}

              />
              ))}
        </div>
        <div className="schedDay" day="sat">
          <h2 className="dayHeader">Sat</h2>
          {this.state.plans
            .filter(plans => plans.day === "sat")
            .map(plans => (
              <Plan
              day={plans.day}
              title={plans.title}
              desc={plans.description}
              category={plans.category}
              start={plans.time}
              duration={plans.duration}
              css={plans.category}
              />
              ))}
        <Link to="/create"><div className="addPlan">+</div></Link>
        </div>
      </div>
    );
  }
}

export default Schedule;
