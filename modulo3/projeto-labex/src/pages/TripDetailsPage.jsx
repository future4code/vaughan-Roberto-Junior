import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DivDetailsPage = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  text-align: center;
  padding: 1%;

  div {
    margin: 5% auto;
    width: 90%;
  }

  .divBottons {
    display: flex;
    border: none;
    justify-content: space-around;
    width: 80%;
  }

  @media (max-width: 600px){
    grid-template-columns: 1fr;
    margin-bottom: 50%;
    height: 100%;
  }
`;

const CardDetails = styled.div`
  box-shadow: 1px 1px 10px white; 
  padding: 2%;
  text-align: justify;
`;

const CardPending = styled.div`
  display: block;
  box-shadow: 1px 1px 10px white;
  padding: 2%;
  text-align: justify;
`;

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

  // const id = localStorage.getItem("id");

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
    return item.name;
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
