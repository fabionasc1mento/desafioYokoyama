import "./App.css";
import React, { Component } from "react";
import apimarcas from "./apimarcas";
import apimodelos from "./apimodelos";
import apianos from "./apianos";

class App extends Component {
  state = {
    marcas: [],
  };

  async componentDidMount() {
    const response = await apimarcas.get("");
    this.setState({ marcas: response.data });
  }

  render() {
    const { marcas } = this.state;

    return (
      <div className="divPrincipal">
        <h1>Lista Códigos e Marcas</h1>
        {console.log(marcas)}
        {marcas.map((index) => (
          <li key={index.codigo}>
            <div className="marcasContainer">
              <p>Código: {index.codigo}</p>
              <h2>Marca: {index.nome}</h2>
            </div>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
