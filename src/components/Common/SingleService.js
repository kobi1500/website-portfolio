import React, { Component } from "react";
import { tsThisType } from "@babel/types";

export default class SingleService extends Component {
  render() {
    return (
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary" />
          <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`} />
        </span>
        <h4 className="service-heading">{this.props.title}</h4>
        <p className="text-muted">{this.props.description}</p>
      </div>
    );
  }
}
