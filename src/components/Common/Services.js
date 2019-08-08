import React, { Component } from "react";
import SingleService from "./SingleService";
const services = [
  {
    title: "E-commerce",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, doloremque",
    icon: "fa-shopping-cart"
  },
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, doloremque",
    icon: "fa-laptop"
  },
  {
    title: "Web Security",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, doloremque",
    icon: "fa-lock"
  }
];
export default class Services extends Component {
  render() {
    return (
      <div>
        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row text-center">
              {services.map((service, index) => {
                return <SingleService {...service} key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
