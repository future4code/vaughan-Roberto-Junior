import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RequestTrips } from "../Hooks/RequestTrips";
import { useEffect, useState } from "react";

const DivPainelAdm = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  h1{
    color: white;
    margin: 2%;
  }
`

const ListTripsName = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 5px gray;
  padding: 1%;
  font-weight: bold;
  margin: 0.3% 0;
  width: 30%;
  background-color: whitesmoke;

  :hover {
    background-color: lightgray;
  }

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

const DivButtonsPanelAdm = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;

  @media (max-width: 600px){
    width: 100%;
    justify-content: space-evenly;
  }
`

const ButtonsAdm = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-bottom: 1%;

  @media (max-width: 600px){
    width: 100%;
  }
`



export default function AdminHomePage() {

  const navigate = useNavigate();

  const [allTrips, renderListTrips] = RequestTrips("Roberto-Maia-Vaughan");

  useEffect(()=>{
    if(localStorage.getItem('token') === null){
      alert('Você Não esta Logado')
      navigate('/login');
    } 
  },[])
  

  const FunctionRouterPages = (url) => {
    navigate(url);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  const TripDetails = (id) => {
    localStorage.setItem('id', id)
    navigate(`/admin/trips/${id}`);
    
  }

  const DeleteTripConfirm = (id, name) => {
      const confirm = window.confirm(`Deseja Deletar a Viagem ${name} ?`);

      if(confirm){
        DeleteTrip(id);
      }else{
          return false;
      }
  }   

  const DeleteTrip = (id) => {
      const aluno = 'Roberto-Maia-Vaughan'
      const token = localStorage.getItem("token");
      const auth = { headers: { auth: token } };
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${id}`

      axios.delete(url, auth)
      .then((resp) =>{
          alert('Viagem Deletada com Sucesso !');
          renderListTrips('Roberto-Maia-Vaughan');
      })
      .catch((err) => {
          alert('Ocorreu um Erro , Atualize a pagina e tente novamente.');
      })
  };

  return (
    <DivPainelAdm>
      <h1>Painel Administrativo</h1>
      <ButtonsAdm>
      <button className="btn btn-info" onClick={() => FunctionRouterPages("/")}>Voltar</button>
      <button className="btn btn-info" onClick={() => FunctionRouterPages("/admin/trips/create")}>
        Criar Viagem
      </button>
      <button className="btn btn-info" onClick={logout}>Logout</button>
      </ButtonsAdm>
      {allTrips.length === 0 ? <h2>Carregando ...</h2> : allTrips.map((item) => {
        return (
          <ListTripsName key={item.id}> 
            <div>
                {item.name}
            </div>
            <DivButtonsPanelAdm>
              <button type="button" class="btn btn-info" onClick={() => TripDetails(item.id)}>Info</button>
              <button type="button" class="btn btn-danger" onClick={() => DeleteTripConfirm(item.id, item.name)}>Excluir</button>
            </DivButtonsPanelAdm>
          </ListTripsName>
        );
      })}
    </DivPainelAdm>
  );
}
