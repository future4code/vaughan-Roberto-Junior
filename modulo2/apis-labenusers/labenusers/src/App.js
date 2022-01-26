import axios from "axios";
import styled from "styled-components";
import CadastroUsario from "./components/CadastroUsuario";
import ListaUsuario from "./components/ListaUsuario";
import React from "react";

const DivPai = styled.div`
  display: flex;
  justify-content: center;

`;

const DivDoCentro = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 500%;
  margin-top: 20px;
  border: 1px solid gray;
`;

const TrocarTela = styled.button`
  width: 20%;
  margin-bottom: 30px;
`

const Inputs = styled.div`
  margin-bottom: 30px;
`

class App extends React.Component {
  state = {
    users: [],

    inputName: "",
    inputEmail: "",

    tela: 1,
  };

  trocaDeTela = () => {
    if (this.state.tela === 1) {
      this.setState({ tela: 2 });
    } else {
      this.setState({ tela: 1 });
    }
  };

  changeName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  addUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const autorizacao = { headers: { Authorization: "roberto-maia-vaughan" } };
    const body = { name: this.state.inputName, email: this.state.inputEmail };
    axios
      .post(url, body, autorizacao)
      .then((resp) => {
        alert("Usuario Adicionado com Sucesso !");
        this.setState({ inputEmail: "", inputName: "" });
      })
      .catch((erro) => {
        alert("Algo deu errado");
        console.log(erro.message);
      });
  };

  getUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const autorizacao = { headers: { Authorization: "roberto-maia-vaughan" } };

    axios
      .get(url, autorizacao)
      .then((resp) => {
        console.log("Deu Certo");
        this.setState({ users: resp.data });
        // this.setState({users: resp.data.result.list})
      })
      .catch((error) => {
        console.log("Não Deu Certo");
        console.log(error);
      });
  };

  renderizaEtapa = () => {
    switch (this.state.tela) {
      case 1:
        return (
          <CadastroUsario
            funcaoAdd={this.addUser}
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            changeName={this.changeName}
            changeEmail={this.changeEmail}
          />
        );
      case 2:
        return (
          <ListaUsuario
            getUser={this.getUser}
            lista={this.state.users}
            deletar={this.excluir}
          />
        );
    }
  };

  excluir = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const autorizacao = { headers: { Authorization: "roberto-maia-vaughan" } };

    axios
      .delete(url, autorizacao)
      .then((resp) => {
        alert("Deletado com Sucesso !");
        this.getUser();
      })
      .catch((error) => {
        console.log(error);
        alert("Não Foi Possível Deletar");
      });
  };

  render() {
    return (
      <DivPai>
        <DivDoCentro>
          <h1>Labenusers</h1>
          <TrocarTela onClick={this.trocaDeTela}>Trocar De Tela</TrocarTela>
          <Inputs>
          {this.renderizaEtapa()}
          </Inputs>
        </DivDoCentro>
      </DivPai>
    );
  }
}

export default App;
