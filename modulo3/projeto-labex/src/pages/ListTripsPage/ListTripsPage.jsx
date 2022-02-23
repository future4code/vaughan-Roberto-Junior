import { useNavigate } from "react-router-dom";
import { RequestTrips } from "../../Hooks/RequestTrips";
import LoadingGitGet from "../LoadingGifGet/LoadingGifGet";
import {DivListTrips, DivButtons, GridCards, CardTrips} from './styles'


export default function ListTripsPage() {

  const navigate = useNavigate();

  const FunctionRouterPages = (url) => {
      navigate(url);
  }

  const [allTrips, functionRequest] = RequestTrips('Roberto-Maia-Vaughan');



  return (
    <DivListTrips>
      <DivButtons>
        <button className="btn btn-info" onClick={() => FunctionRouterPages('/')}>Voltar</button>
        <button className="btn btn-info" onClick={() => FunctionRouterPages('/trips/application')}>Inscrever-se</button>
      </DivButtons>
      <h2>Lista De Viagens</h2>

      <GridCards>
        {allTrips.length === 0 ? <h2>Carregando ...</h2> : allTrips.map((item) => {
          return (
            <CardTrips key={item.id}>
              <p>
                <b>Nome: </b>
                {item.name}
              </p>
              <p>
                <b>Descrição: </b>
                {item.description}
              </p>
              <p>
                <b>Planeta: </b>
                {item.planet}
              </p>
              <p>
                <b>Duração: </b>
                {item.durationInDays}
              </p>
              <p>
                <b>Data: </b>
                {item.date}
              </p>
            </CardTrips>
          );
        })}
      </GridCards>
    </DivListTrips>
  );
}
