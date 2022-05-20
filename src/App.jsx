import { Component } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = e => {
    this.setState(prev => {
      return { [e.target.name]: prev[e.target.name] + 1 }
    })
  }
  render() {
    return (
      <div className="app">
        <Section
          title="Please leave feedback"
          children={<FeedbackOptions
            data={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />}
        />

        <Section
          title="Statistics"
          children={
            this.state.good + this.state.bad + this.state.neutral
              ? <Statistics
                data={this.state}
              />
              : <Notification message="There is no feedback" />}
        />
      </div>)
  };
};
