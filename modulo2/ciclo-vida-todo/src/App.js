import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  color: ${({completa}) => (completa ? 'red' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],

      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

    // if(this.state.inputValue == ''){}else{

    const novaTarefa = JSON.stringify(this.state.tarefas)

    localStorage.setItem("nova tarefa", novaTarefa);

    // }
     
  };

  componentDidMount() {

    const tarefasLocais = JSON.parse(localStorage.getItem('nova tarefa'));

    if(tarefasLocais){

    this.setState({tarefas: tarefasLocais});

    }

  };

  onChangeInput = (event) => {
    
     this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {
     const novaTarefa = {id: Date.now(),
                        texto: this.state.inputValue,
                        completa: false}

     const copiaTarefa = [...this.state.tarefas, novaTarefa];
     
     this.setState({tarefas: copiaTarefa});

     this.setState({inputValue: ''})
  }

  selectTarefa = (id) => {

    const novaLista = this.state.tarefas.map((item) => {
       if (item.id === id){
         const novoEstado = {...item, completa: !item.completa}
         return novoEstado;
       }else{return item}
       
      })

      this.setState({tarefas: novaLista});
    }

  onChangeFilter = (event) => {

    const selecionado  = event.target.value;

    if (selecionado === 'pendentes'){
       
        this.setState({filtro: 'pendentes'})
      
    }else if(selecionado === 'completas'){
      
      this.setState({filtro: 'completas'})
    }else{
      this.setState({filtro: ''})
    }


  }

  render() {


    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
          case '':
          return tarefa.texto
        default:
          return;
      }
    })

     
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
        
      </div>
    )
  }
}

export default App
