import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}
