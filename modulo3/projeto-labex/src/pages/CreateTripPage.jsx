import { useNavigate } from "react-router-dom";


export default function CreateTripPage(){

    const navigate = useNavigate();

    const FunctionRouterPages = (url) => {
        navigate(url);
    }


    return(
        <>
        <h1>Criar Viagens</h1>
        <button onClick={() => FunctionRouterPages('/admin/trips/list')}>Voltar</button>
        <button>Criar</button>
        </>
    )
}