import React from "react";
import axios from "axios";
import GetAllPlaylist from "./components/GetAllPlaylist/GetAllPlaylist";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import styled from "styled-components";

const DivPai = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component {
  state = {
    playlist: [],
    page: "create",
    inputValue: "",
  };

  componentDidUpdate(prevProps) {
    if (this.props.playlist !== prevProps.playlist) {
      this.getAllPlaylist();
    }
  }

  getAllPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const authorization = {
      headers: { Authorization: "roberto-maia-vaughan" },
    };

    axios
      .get(url, authorization)
      .then((resp) => {
        this.setState({ playlist: resp.data.result.list });
      })
      .catch((err) => {
        alert("Opa algo deu errado");
        console.log(err.response);
      });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const authorization = {
      headers: { Authorization: "roberto-maia-vaughan" },
    };
    const body = { name: this.state.inputValue };

    axios
      .post(url, body, authorization)
      .then((resp) => {
        alert("Playlist Criada com Sucesso !");
        this.setState({ inputValue: "" });
      })
      .catch((err) => {
        alert("Algo Inesperado Aconteceu!");
        console.log(err.response);
      });
  };

  deletePlaylist = (id) => {

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const authorization = {headers:{Authorization: 'roberto-maia-vaughan'}}

    axios.delete(url, authorization)
    .then((resp) => {
      alert('Playlist Deletada Com Sucesso !!')
      this.getAllPlaylist();
    }).catch((err) => {
      alert('Houve um erro ao deletar a playlist selecionada');
      console.log(err.response);
    })

  }

  handlerInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "create":
        return (
          <CreatePlaylist
            value={this.state.inputValue}
            onchange={this.handlerInput}
            createPlaylist={this.createPlaylist}
          />
        );
      case "getall":
        return <GetAllPlaylist 
        getAllPlaylist={this.getAllPlaylist} 
        playlist={this.state.playlist}
        delete={this.deletePlaylist}
        />;
      default:
        return <CreatePlaylist />;
    }
  };

  changePage = (param) => {
     this.setState({page: param})
  }

  render() {
    return <DivPai>
      <div>
        <button onClick={() => this.changePage('create')}>Criar Playlist</button>
        <button onClick={() => this.changePage('getall')}>Visualizar Playlists</button>
      {this.renderPage()}
      </div>
      </DivPai>;
  }
}

export default App;
