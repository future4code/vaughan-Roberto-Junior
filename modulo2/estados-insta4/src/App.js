import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    pessoas: [
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Chijo",
      fotoUsuario: "https://picsum.photos/200",
      fotoPost: "https://picsum.photos/200/151"
    },
    {
      nomeUsuario: "Indio",
      fotoUsuario: "https://picsum.photos/50",
      fotoPost: "https://picsum.photos/200/300"
    }
  ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""

  }

  adicionaPessoa = () => {
  
    const novaPessoa = {

      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost

    };

    console.log(novaPessoa);

 
    const novoPessoas = [novaPessoa , ...this.state.pessoas];


    this.setState({ pessoas: novoPessoas });

    console.log(this.state.pessoas);
    console.log(novoPessoas);

    this.setState({ nomeUsuario: "", fotoUsuario: "", fotoPost: "" });

  };

  onChangeNome = (event) => {

    this.setState({ nomeUsuario: event.target.value });

  };

  onChangeUser = (event) => {

    this.setState({ fotoUsuario: event.target.value });

  };

  onChangePost = (event) => {

    this.setState({ fotoPost: event.target.value });

  };


  render() {



    const NovoPost = this.state.pessoas.map((pessoa) => {

      return (
        <MainContainer>
        <Post
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
        </MainContainer>
      );
    });


    return (
      <>
       <MainContainer>
       <h2>Criar novo Post</h2>
        Nome :<input type='text' 
        value={this.state.nomeUsuario} 
        onChange={this.onChangeNome} 
        placeholder={"Seu Nome"}
        />

        Sua Foto:<input type='text' 
        value={this.state.fotoUsuario} 
        onChange={this.onChangeUser} 
        placeholder={"Sua Foto"}
        />

        Foto do Post:<input type='text' 
        value={this.state.fotoPost} 
        onChange={this.onChangePost} 
        placeholder={"Foto do Post"}
        />
        <br/>
        <button onClick={this.adicionaPessoa}>Enviar</button><br/>
        </MainContainer>

        {NovoPost}

    
     </>
    );
  }
}

export default App;
