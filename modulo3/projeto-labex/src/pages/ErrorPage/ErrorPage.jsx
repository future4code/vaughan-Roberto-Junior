import { useNavigate } from "react-router-dom";
import {DivError} from './styles'

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
