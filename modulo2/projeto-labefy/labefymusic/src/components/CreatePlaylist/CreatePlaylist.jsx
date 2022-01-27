import React from "react";
import axios from "axios";

class CreatePlaylist extends React.Component {
  render() {
    return (
      <>
        <h2>Criar Playlist</h2>
        <input
          type="text"
          placeholder="Nome Da PlayList"
          value={this.props.value}
          onChange={this.props.onchange}
        />
        <button onClick={this.props.createPlaylist}>Criar</button>
        <br />
      </>
    );
  }
}

export default CreatePlaylist;
