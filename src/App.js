import React, { Component } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Card from "./Card.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: blueviolet;
  }

`;

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header dia="08 de agosto" mensagem="Aula de Props" />

        <main>
          <Card nome="Luan" idade={22} />
          <Card nome="Mari" idade={18} />
        </main>

        <Footer>
          <button>Entrar</button>
        </Footer>
      </div>
    );
  }
}
