import React from "react";
import styled from "styled-components";

const Formulario = styled.form`
  display: flex;
  width: 20%;
  flex-direction: column;
  margin: 20px 0;
  border: 2px solid gray;
  padding: 1% 2%;

  h2{
    margin: 0 0 5% 0;
  }

  input{
     width: 50%;
     margin: auto;
 }

`;

const BotaoEnviar = styled.button`
  width: 40%;
  height: 25px;
  margin: 10% auto 0 auto;
`;

class Etapa2 extends React.Component {
  render() {
    return (
      <Formulario>
        <h2>Etapa 2 : Informações do Ensino Superior</h2>
        <label>Qual o Curso ?</label> <input type="text" />
        <label>Qual a Unidade de Ensino ?</label> <input type="number" />
        <BotaoEnviar onClick={this.props.clicado}>Próxima Etapa</BotaoEnviar>
      </Formulario>
    );
  }
}

export default Etapa2;
