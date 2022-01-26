import styled from "styled-components";
import axios from "axios";
import React from "react";


const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  padding: 5px 5px 5px 5px;
  margin: 0 0 5px 0;
  font-weight: bold;
  border: 1px solid gray;
`

const PaiLista = styled.div`
display: flex;
flex-direction: column;
 width: 100vw;
 align-items: center;
`


class ListaUsuario extends React.Component {

    componentDidMount = () => {
        this.props.getUser();
    }


    render(){

        const exibir = this.props.lista.map((item) => {
            return <Itens>{item.name}<button onClick={() => this.props.deletar(item.id)}>X</button></Itens>
        });

        return(
            <PaiLista>
            {exibir}
            </PaiLista>
        )
    }
}

export default ListaUsuario;