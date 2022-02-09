import "./index.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import accept from "./img/accept.png";
import del from "./img/del2.png";
import axios from "axios";
import {CardMatch, BottonsLike, MatchsList, ButtonMatch} from './styles'



function App() {

  //states
  const [profiles, setProfiles] = useState({});
  const [matchs, setMatchs] = useState([]);
  const [screen, setScreen] = useState(false);


 //Função que chama a requisição quando a pagina for montada
  useEffect(() => {
    requestPerson();
  }, []);


  //variavel global
  const aluno = "Roberto-Maia-Vaughan";


  //requisição que pega os perfis
  const requestPerson = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`;

    Axios.get(url)
      .then((resp) => {
        setProfiles(resp.data.profile);
      })
      .catch((err) => {
        alert("Algo inesperado Aconteceu");
        console.log(err);
      });
  };

  //requisição para dar match em um id
  const pushMatch = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`;
    const body = {
      id: profiles.id,
      choice: true,
    };

    axios
      .post(url, body)
      .then((resp) => {
        alert("Like");
        requestPerson();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  //requisição para limpar os matches
  const clearMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`;

    axios
      .put(url)
      .then((response) => {
        alert("Matchs Deletados !");
        yourMatches();
      })
      .catch((err) => {
        alert("Ops! tente Novamente");
      });
  };


  //requisição que retorna os matchs
  const yourMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`;

    axios
      .get(url)
      .then((resp) => {
        setMatchs(resp.data.matches);
      })
      .catch((err) => {
        alert("algo inesperado aconteceu");
        console.log(err);
      });
  };


  //função para selecionar a tela
  const changeScreen = () => {
    setScreen(!screen);
  };


  //area de matchs
  const matchArea = () => {
    return (
      <>
        {yourMatches()}

        <button onClick={changeScreen} type="button" className="btn btn-dark">
          Retornar
        </button>
        {matchs.length === 0 ? (
          <h5>Nenhum Match ainda =( continue tentando</h5>
        ) : (
          matchs.map((item) => {
            return (
              <MatchsList>
                <img src={item.photo} />
                {item.name}
              </MatchsList>
            );
          })
        )}
        <button type="button" className="btn btn-danger" onClick={clearMatches}>
          Resetar
        </button>
      </>
    );
  };


  //area dos perfis
  const CardPerson = () => {
    return (
      <>
        <ButtonMatch onClick={changeScreen} type="button" className="btn btn-info">
          Ver Matchs
        </ButtonMatch>
        {profiles.length === 0 ? <h1>carregando ..</h1> :
        <>
        <h1>{profiles.name}</h1>
        <img src={profiles.photo} />
        <br />
        <strong>idade: {profiles.age}</strong>
        <h4>{profiles.bio}</h4>
        <BottonsLike>
          <img src={accept} onClick={pushMatch} />
          <img src={del} onClick={requestPerson} />
        </BottonsLike>
        </>
       }
      </>
    );
  };

  return (
    <div className="App">
      <CardMatch>{screen ? matchArea() : CardPerson()}</CardMatch>
    </div>
  );
}

export default App;
