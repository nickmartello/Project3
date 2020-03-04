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

  readData = () => {
    let workArray = [];
    let funArray = [];
    let choresArray = [];
    let familyArray = [];
    let sleepArray = [];

    //work
    workArray.push(this.state.plans.filter(plans => plans.category === "work"));
    //fun
    funArray.push(this.state.plans.filter(plans => plans.category === "fun"));
    //chores
    choresArray.push(
      this.state.plans.filter(plans => plans.category === "chores").duration
    );
    //family
    familyArray.push(
      this.state.plans.filter(plans => plans.category === "family")
    );
    //sleep
    sleepArray.push(
      this.state.plans.filter(plans => plans.category === "sleep")
    );
  };

  componentDidMount() {
    this.readData();
  }

  render() {
    return (
      <PieChart
        work={this.state.work}
        fun={this.state.fun}
        chores={this.state.chores}
        family={this.state.family}
        sleep={this.state.sleep}
      />
    );
  }
}

export default Dashboard;
