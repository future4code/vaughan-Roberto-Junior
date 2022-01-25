import styled from "styled-components";
import axios from "axios";
import React from "react";




class ListaUsuario extends React.Component {

    componentDidMount = () => {
        this.props.getUser();
    }


    render(){

        const exibir = this.props.lista.map((item) => {
            return <p>{item.name}<button onClick={() => this.props.deletar(item.id)}>Excluir</button><br/></p>
        });

        return(
            <>
            {exibir}
            </>
        )
    }
}

export default ListaUsuario;