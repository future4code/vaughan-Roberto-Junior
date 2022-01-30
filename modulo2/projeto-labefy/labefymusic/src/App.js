import React from "react";
import axios from "axios";
import GetAllPlaylist from "./components/GetAllPlaylist/GetAllPlaylist";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import styled from "styled-components";
import InitialPage from "./components/InitialPage/InitialPage";
import "./App.css";

const DivPai = styled.div`
  display: flex;
  background-image: linear-gradient(to right, cyan, yellow);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px 20px white;
  width: 40%;
  margin: 50px auto;
  padding: 10px 10px 40px 10px;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  div > button {
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 10px 0;
    border-color: black;
    color: black;
    font-weight: bold;

    &:hover {
      background-color: white;
      color: black;
      cursor: grabbing;
      background-image: linear-gradient(to right, white, cyan);
    }
  }

  input {
    border-radius: 10px white;
    padding: 5px;
  }
`;

const ImgNota = styled.img`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: flex-end;
  width: 30px;
  height: 30px;
`;

class App extends React.Component {
  state = {
    playlist: [],
    page: "",
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
    if (window.confirm("Deseja mesmo apagar essa playlist ?")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
      const authorization = {
        headers: { Authorization: "roberto-maia-vaughan" },
      };

      axios
        .delete(url, authorization)
        .then((resp) => {
          alert("Playlist Deletada Com Sucesso !!");
          this.getAllPlaylist();
        })
        .catch((err) => {
          alert("Houve um erro ao deletar a playlist selecionada");
          console.log(err.response);
        });
    }
  };

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
        return (
          <GetAllPlaylist
            getAllPlaylist={this.getAllPlaylist}
            playlist={this.state.playlist}
            delete={this.deletePlaylist}
          />
        );
      case "initial":
        return <InitialPage />;
      default:
        return <InitialPage />;
    }
  };

  changePage = (param) => {
    this.setState({ page: param });
  };

  render() {
    return (
      <DivPai>
        <div>
          <button onClick={() => this.changePage("initial")}>
            Página Inicial
          </button>
          <button onClick={() => this.changePage("create")}>
            Criar Playlist
          </button>
          <button onClick={() => this.changePage("getall")}>
            Visualizar Playlists
          </button>
          {this.renderPage()}
        </div>
      </DivPai>
    );
  }
}

export default App;
