import { useNavigate } from "react-router-dom";


export default function AdminHomePage(){

    const navigate = useNavigate();

    const FunctionRouterPages = (url) => {
        navigate(url)
    }
    return(
        <>
        <h1>ADM Home Page</h1>
        <button onClick={() => FunctionRouterPages('/')}>Voltar</button>
        <button onClick={() => FunctionRouterPages('/admin/trips/create')}>Criar Viagem</button>
        <button >Logout</button>
        </>
    )
}