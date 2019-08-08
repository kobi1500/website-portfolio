import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";

import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="tell me more"
          link="/services"
          showButton={true}
          image={image}
        />

        <Services />
        <Portfolio />
        <Timeline />
        <Team />
      </div>
    );
  }
}