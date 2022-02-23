import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {DivDetailsPage, CardDetails, CardPending} from './styles.js'


export default function TripDetailsPage() {
  
  const navigate = useNavigate();

  const params = useParams();

  const [DetailsTrips, setDetailsTrips] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("Você Não esta Logado");
      navigate("/login");
    }

    returnTripDetails();
  }, []);

  const returnTripDetails = () => {
    const aluno = "Roberto-Maia-Vaughan";
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${params.id}`;
    const token = localStorage.getItem("token");
    const auth = { headers: { auth: token } };

    axios
      .get(url, auth)
      .then((resp) => {
        setDetailsTrips(resp.data.trip);
        setApproved(resp.data.trip.approved);
        setCandidates(resp.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const FunctionRouterPages = (url) => {
    localStorage.removeItem("id");
    navigate(url);
  };

  const cardDetails = () => {
    return (
      <CardDetails>
        <p>
          <b>Nome : </b>
          {DetailsTrips.name}
        </p>
        <p>
          <b>Descrição : </b>
          {DetailsTrips.description}
        </p>
        <p>
          <b>Planeta : </b>
          {DetailsTrips.planet}
        </p>
        <p>
          <b>Duração : </b>
          {DetailsTrips.durationInDays}
        </p>
        <p>
          <b>Data : </b>
          {DetailsTrips.date}
        </p>
      </CardDetails>
    );
  };

  const decideCandidate = (idCandidate, status) => {
    const aluno = "Roberto-Maia-Vaughan";
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${params.id}/candidates/${idCandidate}/decide`;
    const token = localStorage.getItem("token");
    const auth = { headers: { auth: token } };
    const body = {
      approve: status,
    };

    axios
      .put(url, body, auth)
      .then((resp) => {
        if (status) {
          alert("Candidato Aprovado !");
          returnTripDetails();
        } else {
          alert("Candidato Reprovado !");
          returnTripDetails();
        }
      })
      .catch((err) => {
        alert("Algo Deu Errado !");
        console.log(err);
      });
  };

  const mapApproved = approved.map((item) => {
    return <li hey={item.id}>{item.name}</li>
  });

  const mapCandidates = candidates.map((item) => {
    return (
      <CardPending key={item.id}>
        <p>
          <b>Nome: </b>
          {item.name}
        </p>
        <p>
          <b>Profissão: </b>
          {item.profession}
        </p>
        <p>
          <b>Idade: </b>
          {item.age}
        </p>
        <p>
          <b>País: </b>
          {item.country}
        </p>
        <p>
          <b>Texto de Candidatura: </b>
          {item.applicationText}
        </p>
        <div className="divBottons">
          <button
            class="btn btn-success"
            onClick={() => decideCandidate(item.id, true)}
          >
            Aprovar
          </button>
          <button
            class="btn btn-danger"
            onClick={() => decideCandidate(item.id, false)}
          >
            Reprovar
          </button>
        </div>
      </CardPending>
    );
  });

  return (
    <DivDetailsPage>
      <div>
        <h2>Detalhes </h2>
        {cardDetails()}
        <button
          class="btn btn-primary"
          onClick={() => FunctionRouterPages("/admin/trips/list")}
        >
          Voltar
        </button>
      </div>
      <div>
        <h3>Candidatos Pendentes</h3>
        {candidates.length === 0 ? (
          <b>Não há candidatos pendentes</b>
        ) : (
          mapCandidates
        )}
      </div>
      <div>
        <h3>Candidatos Aprovados</h3>
        {approved.length === 0 ? (
          <b>Não há candidatos aprovados</b>
        ) : (
          mapApproved
        )}
      </div>
    </DivDetailsPage>
  );
}
