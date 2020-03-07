import React, { Component } from "react";
import PieChart from "./../PieChart/PieChart.js";
import plans from "./../../plans.json";
import Fact from "./Fact.js";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    work: 0,
    fun: 0,
    chores: 0,
    family: 0,
    sleep: 0,
    unknown: 0,
    avgSleep: 0,
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
    this.setState({
      unknown:
        168 -
        workArray.reduce(this.add).reduce(this.add) -
        funArray.reduce(this.add).reduce(this.add) -
        choresArray.reduce(this.add).reduce(this.add) -
        familyArray.reduce(this.add).reduce(this.add) -
        sleepArray.reduce(this.add).reduce(this.add)
    });
  };

  percentage = number => {
    return Math.floor((number * 100) / 168);
  };

  generateWorkFact = num => {
    switch (true) {
      case num >= 60:
        return `You're spending ${num} hours on work this week. Thats ${this.percentage(
          num
        )}% of your week. Care to offset that?`;
        break;
      case num <= 25:
        return `You're only spending ${num} hours on work this week. Are you putting in enough time to get where you want?`;
        break;
      case num >= 30 && num <= 45:
        return `${num} hours is a good amount of time to spend on work weekly.`;
        break;
      case (num = 0):
        return `You have no time set aside for work. What's that all about?`;
        break;
    }
  };
  generateFunFact = num => {
    switch (true) {
      case num >= 60:
        return `You're spending ${num} hours on fun this week. Thats ${this.percentage(
          num
        )}% of your week. Are you getting done all you need to?`;
        break;
      case num <= 20:
        return `You're only spending ${num} hours on yourself this week. Are you at risk of burning out?`;
        break;
      case num >= 30 && num <= 45:
        return `${num} hours is a good amount of time to spend on yourself weekly.`;
        break;
      case (num = 0):
        return `You have no time set aside for yourself. What's that all about?`;
        break;
    }
  };
  generateChoresFact = num => {
    switch (true) {
      case num >= 30:
        return `You're planning ${num} hours of chores this week. Is that really realistic?`;
        break;
      case num <= 4:
        return `Are there things in your life that you're neglecting? You only have ${num} hours set aside for chores`;
        break;
      case num >= 5 && num <= 15:
        return `You've got ${num} hours set aside for chores. Get it done!`;
        break;
      case (num = 0):
        return `You have no time set aside for chores. What's that all about?`;
        break;
    }
  };
  generateSleepFact = num => {
    switch (true) {
      case num >= 60:
        return `You're dedicating ${num} hours to sleep this week. Maybe you should push yourself to wake up earlier!`;
        break;
      case num <= 40:
        return `Wanna try giving yourself more time to sleep?`;
        break;
      case num >= 41 && num <= 59:
        return `${num} hours is a good amount of sleep per week`;
        break;
    }
  };

  generateUnknownFact = num => {
    switch (true) {
      case num >= 50:
        return `You have ${num} hours of unplanned time this week. For more accurate stats, add more of your plans!`;
        break;
      case num <= 49:
        return `There are 168 hours in every week. It's your choice how you spend them`;
        break;
    }
  };

  componentDidMount() {
    this.readData();
  }

  render() {
    return (
      <div>
        <PieChart
          work={this.state.work}
          fun={this.state.fun}
          chores={this.state.chores}
          family={this.state.family}
          sleep={this.state.sleep}
          unknown={this.state.unknown}
        />
        <div className="insetCircle"></div>
        <div className="outsetCircle"></div>

        <Fact
          css="workFact fact"
          text={this.generateWorkFact(this.state.work)}
        />
        <Fact css="funFact fact" text={this.generateFunFact(this.state.fun)} />
        <Fact
          css="choresFact fact"
          text={this.generateChoresFact(this.state.chores)}
        />
        <Fact
          css="sleepFact fact"
          text={this.generateSleepFact(this.state.sleep)}
        />
        <Fact
          css="unknownFact fact"
          text={this.generateUnknownFact(this.state.unknown)}
        />
      </div>
    );
  }
}

export default Dashboard;
