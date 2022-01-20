import "./App.css";
import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

class App extends React.Component {

  state = {
    etapa: 1,
  };

  BotaoClicado = () => {
    if (this.state.etapa === 1){
      this.setState({ 
        etapa: 2
      });
    }else if(this.state.etapa === 2){
      this.setState({
        etapa: 3
      });
    }else{
      this.setState({
        etapa: 4
      });
    }
  };


  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 clicado={this.BotaoClicado}/>;
      case 2:
        return <Etapa2 clicado={this.BotaoClicado}/>;
      case 3:
        return <Etapa3 clicado={this.BotaoClicado}/>;
      default:
        return <Final clicado={this.BotaoClicado}/>;
    }
  };



  render() {

    return (
      <div className="geral">
        {this.renderizaEtapa()}
      </div>
    );
  }
}

export default App;
