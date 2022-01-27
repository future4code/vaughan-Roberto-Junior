import axios from "axios";
import React from "react";
import styled from "styled-components";

const DivPai = styled.div`
   display: flex;
   flex-direction: column;

   input{
     width: 200px;
     margin-bottom: 10px;
     height: 20px;
   }

   button{
     height: 30px;
   }
`

class CadastroUsario extends React.Component {
  render() {
    return (
      <DivPai>
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
      </DivPai>
    );
  }
}

export default CadastroUsario;
