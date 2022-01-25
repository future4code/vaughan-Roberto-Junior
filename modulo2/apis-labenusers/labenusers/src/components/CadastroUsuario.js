import axios from "axios";
import React from "react";
import styled from "styled-components";

class CadastroUsario extends React.Component {
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Nome"
          value={this.props.inputName}
          onChange={this.props.changeName}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.props.inputEmail}
          onChange={this.props.changeEmail}
        />
        <button onClick={this.props.funcaoAdd}>Enviar</button>
      </div>
    );
  }
}

export default CadastroUsario;
