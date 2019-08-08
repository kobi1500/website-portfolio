import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about.jpg";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";
export default class About extends Component {
  render() {
    return (
      <div>
        <Header
          title="About Us"
          subtitle="it's really a great story"
          buttonText="tell me more"
          showButton={false}
          image={image}
        />
        <Timeline />
        <Team />
      </div>
    );
  }
}
