import imgAstro from "../img/astronauta2.png";
import {DivHome, BottonImg, ImgLogo} from './styles'
import { useNavigate } from "react-router-dom";

export default function HomePage(){

  const navigate = useNavigate();
  
  const goToListTrips = (url) => {
    navigate(url);
  }

  return (
    <DivHome>
      <h1>Labe<b>X</b></h1>
      <BottonImg>
        <div>
          <button type="button" className="btn btn-outline-info" onClick={() => goToListTrips('/trips/list')}>
            Ver Viagens
          </button>
          <button type="button" className="btn btn-outline-info" onClick={() => goToListTrips('/login')}>
            Area De ADM
          </button>
        </div>
        {/* <ImgLogo src={imgAstro} /> */}
      </BottonImg>
    </DivHome>
  );
}
