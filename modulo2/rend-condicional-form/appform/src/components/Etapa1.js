import React from 'react';
import styled from 'styled-components'

const Formulario = styled.form`
 display: flex;
 width: 15%;
 flex-direction: column;
 margin: 20px 0;
 border: 2px solid gray;
 padding: 1% 2%;

 h2{
    margin: 0 0 5% 0;
  }

`
const BotaoEnviar = styled.button`
   width: 40%;
   height: 200%;
   margin: 10% auto 0 auto;
`

class Etapa1 extends React.Component{
    render(){
        return(
         <Formulario>
             <h2>Etapa 1 : Dados Gerais</h2>
          <label>Qual Seu Nome ?</label> <input type='text' />
          <label>Qual a Sua Idade ?</label> <input type='number' />
          <label>Qual o Seu Email ?</label> <input type='email' />
          <br/>
          <label for="escolaridade">Qual Sua Escolaridade ?</label>
          <select name='escolaridade'>
              <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
              <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
              <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
              <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
          </select>
          <BotaoEnviar onClick={this.props.clicado}>Próxima Etapa</BotaoEnviar>
         </Formulario>
        )
    }
}

export default Etapa1;