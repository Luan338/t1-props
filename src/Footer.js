import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <h2>Eu sou a footer</h2>
        {this.props.children}
      </footer>
    );
  }
}
