import React from "react";
import iconMusic from '../../img/iconMusic.png'
import styled from "styled-components";

const IconMusic = styled.img`
  width: 30%
`

class InitialPage extends React.Component {
  render() {
    return (
      <>
        <h2>Bem Vindos a Labefy</h2>
        <h3>Crie Playlist e Adicione Suas Musicas Favoritas =)</h3>
        <IconMusic src={iconMusic}/>
      </>
    );
  }
}

export default InitialPage;