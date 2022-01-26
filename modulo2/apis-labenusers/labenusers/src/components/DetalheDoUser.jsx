import axios from "axios";
import React from "react";
import styled from "styled-components";

const DetalhesUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  padding: 5px;
  border: 1px solid gray;

   button{
       margin: 5px;
       width: 100%;
   }
`;

class DetalheDoUser extends React.Component {
  state = {
    detalhes: {},
  };

  componentDidMount() {
    this.obterDetalhes(this.props.idUserDetails);
  }

  obterDetalhes = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    const auth = { headers: { Authorization: "roberto-maia-vaughan" } };

    axios
      .get(url, auth)
      .then((resp) => {
        this.setState({ detalhes: resp.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {

    return (
      <div>
        <DetalhesUser>
          <p>{this.state.detalhes.name}</p>
          <p>{this.state.detalhes.email}</p>
          <button onClick={() => this.props.funcExcluir(this.props.idUserDetails)}>Excluir</button>
          <button >Editar</button>
        </DetalhesUser>
      </div>
    );
  }
}

export default DetalheDoUser;
