import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import error from "../img/404.jpg";

const ImgError = styled.img`
  width: 100%;
  height: 100vh;
`;

const DivError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: black;

  div{
      width: 50%;
      text-align: center;
  }

  h1{
      color: white;
      font-size: 5em;
  }

  button {
      width: 20%;
  }
`;

export default function ErrorPage() {

    const navigate = useNavigate();

  const backToHome = () => {
      navigate('/')
  }

  return (
    <DivError>
      {/* <ImgError src={error} /> */}
      <div>
      <h1>Error 404 <br/>Pagina Não Encontrada</h1>
      <button type="button" className="btn btn-primary" onClick={backToHome}>
        Voltar Para a Home
      </button>
      </div>
    </DivError>
  );
}
