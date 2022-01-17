import React from 'react';
import styled from 'styled-components'

const Formulario = styled.form`
  display: flex;
  width: 20%;
  flex-direction: column;
  margin: 20px 0;
  border: 2px solid gray;
  padding: 1% 2%;
  `

class Final extends React.Component{
    render(){
        return(
         <Formulario>
          <h2>O FORMULÁRIO ACABOU</h2><br/>
          <h3>Muito obrigado por participar! Entraremos em contato!</h3>
         </Formulario>
        )
    }
}

export default Final;