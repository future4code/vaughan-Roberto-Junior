import React from 'react';
import styled from 'styled-components'

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
     width: 70%;
     margin: auto;
 }

 select {
     width: 30%;
     margin: auto;
 }

`;

const BotaoEnviar = styled.button`
  width: 40%;
  height: 25px;
  margin: 10% auto 0 auto;
`;


class Etapa3 extends React.Component{
    render(){
        return(
            <Formulario>
            <h2>Etapa 3 : Informações Gerais de Ensino</h2>
            <label> Por que você não terminou um curso de graduação?</label> <input type="text" />
            <label>Você fez algum curso complementar?</label> 
            <select name='complementar'>
              <option value='Curso técnico'>Curso técnico</option>
              <option value='Cursos de inglês'>Cursos de inglês</option>
              <option value='Não fiz curso complementar'>Não fiz curso complementar</option>
          </select>
            <BotaoEnviar onClick={this.props.clicado}>Próxima Etapa</BotaoEnviar>
          </Formulario>
        )
    }
}

export default Etapa3;