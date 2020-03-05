import React, { Component } from "react";
import PieChart from "./../PieChart/PieChart.js";
import plans from "./../../plans.json";

class Dashboard extends Component {
  state = {
    work: 0,
    fun: 0,
    chores: 0,
    family: 0,
    sleep: 0,
    unknown: 0,
    plans
  };

  add = (a, b) => a + b;

  readData = () => {
    let workArray = [];
    let funArray = [];
    let choresArray = [];
    let familyArray = [];
    let sleepArray = [];

    //work
    workArray.push(
      this.state.plans
        .filter(plans => plans.category === "work")
        .map(i => {
          return i.duration;
        })
    );
    //fun
    funArray.push(
      this.state.plans
        .filter(plans => plans.category === "fun")
        .map(i => {
          return i.duration;
        })
    );
    //chores
    choresArray.push(
      this.state.plans
        .filter(plans => plans.category === "chores")
        .map(i => {
          return i.duration;
        })
    );
    //family
    familyArray.push(
      this.state.plans
        .filter(plans => plans.category === "family")
        .map(i => {
          return i.duration;
        })
    );
    //sleep
    sleepArray.push(
      this.state.plans
        .filter(plans => plans.category === "sleep")
        .map(i => {
          return i.duration;
        })
    );

    this.setState({
      work: workArray.reduce(this.add).reduce(this.add),
      fun: funArray.reduce(this.add).reduce(this.add),
      chores: choresArray.reduce(this.add).reduce(this.add),
      family: familyArray.reduce(this.add).reduce(this.add),
      sleep: sleepArray.reduce(this.add).reduce(this.add)
    });
  };

  componentDidMount() {
    this.readData();
  }

  render() {
    return (
      <div>
        <div className="chartContainer">
          <PieChart
            work={this.state.work}
            fun={this.state.fun}
            chores={this.state.chores}
            family={this.state.family}
            sleep={this.state.sleep}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
