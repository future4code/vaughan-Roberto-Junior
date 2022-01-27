import React from "react";
import axios from "axios";
import styled from "styled-components";

const NovaTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  padding: 10px;

  input{
      margin: 5px 0;
  }
`

class AddTrack extends React.Component {
  render() {
    return (
      <NovaTrack>
        <h3>Nova Track</h3>
        <input
          type="text"
          placeholder="Nome"
          value={this.props.name}
          onChange={this.props.handlerName}
        />
         <input
          type="text"
          placeholder="Artista"
          value={this.props.artist}
          onChange={this.props.handlerArtist}
        />
         <input
          type="text"
          placeholder="Link do MP3"
          value={this.props.url}
          onChange={this.props.handlerUrl}
        />
        <button onClick={this.props.addTrack}>Criar</button>
      </NovaTrack>
    );
  }
}

export default AddTrack;
