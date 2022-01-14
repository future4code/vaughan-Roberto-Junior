import React from "react";
import styled from "styled-components";
import "./MeuChat.css";
import imagemSeta from '../../img/seta.png';

const DivGeral = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const QuadradoCentro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 80%;
  margin-top: 40px;
  border: 2px solid black;
  border-radius: 50px;
`;

const InputChat = styled.input`
  display: flex;
  height: 50%;
  margin: 0 5px; 
  border: 2px solid gray;
  border-radius: 5pt;

`;

const DivDosInputs = styled.div`
  display: flex;
  width: 100%;
  height: 8%;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 10px;
`;

const BotaoEnviar = styled.img`
   width: 5%;
   margin: 0 5px;
`;

const Conteudos = styled.div`
 display: flex;
 flex-direction: column-reverse;
 width: 80%;
 height: 100%;
 margin: 2% 10% 0 10%;
 box-shadow: 1px 1px 5px black;
 padding: 2%;
 background-color: rgb(229, 221, 213);
`

const Titulo = styled.h1`
  padding: 0;
  margin: 0;
  color: #00aa00;
`



class MeuChat extends React.Component {
  render() {

    return (
      <DivGeral>
        <QuadradoCentro>
            <Titulo>WhatsLab</Titulo>
          <Conteudos>{this.props.msgRender}</Conteudos>
          <DivDosInputs>
            <InputChat
              className="input-pequeno"
              type="text"
              placeholder="Usuario"
              value={this.props.valorRem}
              onChange={this.props.inputRem}
            />
            <InputChat
              className="input-maior"
              type="text"
              placeholder="Mensagem"
              value={this.props.valorMsg}
              onChange={this.props.inputMsg}
              id="enter"
            />

            <BotaoEnviar src={imagemSeta} onClick={this.props.clickBotao} />

          </DivDosInputs>
        </QuadradoCentro>
      </DivGeral>
    );
  }
}

export default MeuChat;
