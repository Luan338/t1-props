import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>Eu sou a Header</h1>
      <p>{props.dia}</p>
      <p>{props.mensagem}</p>
    </header>
  );
}
