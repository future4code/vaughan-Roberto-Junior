import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddTrack from "../AddTrack/AddTrack";

const DetalhesTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px;
  padding: 5px;
  margin: 10px;

`;

const BotnExcluirMusic = styled.button`
    width: 35%;
    margin-top: 30px !important;
    margin: auto;
    padding: 300px;
    border-radius: 20px 20px !important;
    opacity: 0.7;
    
    
    &:hover { 
      color: white !important;
      background: red !important;
    }

`

const PlayList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px;
  width: 400px;
  height: 30px;
  font-size: 1.3em;
  margin: 20px 0;
  padding: 10px 10px;
  color: gray;
`;

const Bottons = styled.div`
  display: flex;
  padding: 5px;

  button {
    margin: 5px 2px;
  }
`;

class GetAllPlaylist extends React.Component {
  state = {
    details: false,
    tracks: [],
    addmusic: false,
    trackAdd: "",
    name: "",
    artist: "",
    url: "",
    idOfPlaylist: ''
  };

  componentDidMount() {
    this.props.getAllPlaylist();
  }

  getTracks = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const authorization = {
      headers: { Authorization: "roberto-maia-vaughan" },
    };

    axios
      .get(url, authorization)
      .then((resp) => {
        alert("Exibindo Tracks");
        this.setState({ tracks: resp.data.result.tracks });
        this.setState({ details: true });
        this.setState({ idOfPlaylist: id });
        if (resp.data.result.tracks.length === 0) {
          alert("Playlist Vazia !");
        }
      })
      .catch((err) => {
        alert("Algo Inesperado Aconteceu!");
      });
  };

  addTrack = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.trackAdd}/tracks`;
    const authorization = {
      headers: { Authorization: "roberto-maia-vaughan" },
    };
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(url, body, authorization)
      .then((resp) => {
        alert("Track Adicionada Com Sucesso !");
        this.setState({ addmusic: false });
        this.setState({name: '', artist:'', url: ''})
      })
      .catch((err) => {
        alert("um Erro Inesperado Aconteceu");
        console.log(err.response);
      });
  };

  deleteTrack = (idTrack) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idOfPlaylist}/tracks/${idTrack}`;
    const authorization = {
      headers: { Authorization: "roberto-maia-vaughan" },
    };

    axios
      .delete(url, authorization)
      .then((resp) => {
        alert("Track Deletada Com Sucesso !");
        this.getTracks(this.state.idOfPlaylist);
      })
      .catch((err) => {
        alert("um Erro Inesperado Aconteceu");
        console.log(err.response);
      });
  };

  handlerName = (e) => {
    this.setState({ name: e.target.value });
  };

  handlerArtist = (e) => {
    this.setState({ artist: e.target.value });
  };

  handlerUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  addMusic = (id) => {
    this.setState({ addmusic: !this.state.addmusic });
    this.setState({ trackAdd: id });
  };

  render() {

    const renderPlayList = this.props.playlist.map((item) => {
      return (
        <PlayList key={item.id}>
          {item.name}
          <Bottons>
            <button onClick={() => this.getTracks(item.id)}>Detalhes</button>
            <button onClick={() => this.addMusic(item.id)}>Add Musicas</button>
            <button onClick={() => this.props.delete(item.id)}>Excluir</button>
          </Bottons>
        </PlayList>
      );
    });

    const renderTracks = this.state.tracks.map((item) => {
      return (
        <DetalhesTrack key={item.id}>
          
          <b>{item.artist}</b>,
          <b>{item.name}</b>,
          <a href={item.url} target='_blank'>
            {item.url}
          </a>
          <BotnExcluirMusic onClick={() => this.deleteTrack(item.id)}>Deletar Musica</BotnExcluirMusic>
        </DetalhesTrack>
      );
    });

    return (
      <>
        {renderPlayList}
        {this.state.details && renderTracks}
        {this.state.addmusic && (
          <AddTrack
            handlerUrl={this.handlerUrl}
            handlerName={this.handlerName}
            handlerArtist={this.handlerArtist}
            name={this.state.name}
            url={this.state.url}
            artist={this.state.artist}
            addTrack={this.addTrack}
          />
        )}
      </>
    );
  }
}

export default GetAllPlaylist;
