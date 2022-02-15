
import { useNavigate } from "react-router-dom";


export default function ApplicationFormPage(){

    const navigate = useNavigate();

    const FunctionRouterPages = (url) => {
       navigate(url)
    }
    return(
        <>
             <h1>Formulario</h1>
             <button onClick={() => FunctionRouterPages('/trips/list')}>Voltar</button>
             <button>Enviar</button>
        </>
    )
}