import "./index.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardMatch } from "./styles";
import MatchArea from "./components/MatchArea";
import CardPerson from "./components/CardPerson";

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


  //swipeCards
  const onSwipe = (direction) => {
    if (direction === "left") {
      pushMatch();
    } else if (direction === "right") {
      requestPerson();
    }
  };

  return (
    <div className="App">
      <CardMatch>
        {screen ? (
          <MatchArea
            changeScreen={changeScreen}
            matchs={matchs}
            clearMatches={clearMatches}
            yourMatches={yourMatches}
          />
        ) : 
          <CardPerson 
          profiles={profiles}
          changeScreen={changeScreen}
          requestPerson={requestPerson}
          onSwipe={onSwipe}
          />
        }
      </CardMatch>
    </div>
  );
}

export default App;
