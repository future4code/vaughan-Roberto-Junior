import styled from "styled-components";
import axios from "axios";
import React from "react";
import DetalheDoUser from "./DetalheDoUser";

const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  padding: 5px 5px 5px 5px;
  margin: 0 0 5px 0;
  font-weight: bold;
  border: 1px solid gray;
`;

const PaiLista = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const DivBotoes = styled.div`
  button {
    margin-right: 5px;
  }
`;

const BotaoDeDeletar = styled.button`
  background-color: red;
  color: white;
`;

class ListaUsuario extends React.Component {
  state = {
    id: 0,
  };

  componentDidMount = () => {
    this.props.getUser();
  };

  mostrarDetalhes = (id) => {
    if (this.state.pagina === 1) {
      this.setState({ pagina: 2 });
      this.setState({ id: id });
    } else {
      this.setState({ pagina: 1 });
    }
  };

  render() {
    const exibir = this.props.lista.map((item) => {
        return (
          <Itens key={item.id}>
            {item.name}
            <DivBotoes>
              <button onClick={() => this.props.detalhes(item.id)}>
                Detalhes
              </button>
              <BotaoDeDeletar onClick={() => this.props.deletar(item.id)}>
                X
              </BotaoDeDeletar>
            </DivBotoes>
          </Itens>
        );
    });

    return (
      <>
        <PaiLista>
          {exibir}
        </PaiLista>
      </>
    );
  }
}

export default ListaUsuario;
