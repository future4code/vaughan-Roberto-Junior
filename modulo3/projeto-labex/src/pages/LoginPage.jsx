import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const FunctionRouterPages = (url) => {
        navigate(url);
    }
  return (
    <>
      <h1>Pagina de Login</h1>
      <button onClick={() => FunctionRouterPages('/')}>Voltar</button>
      <button onClick={() => FunctionRouterPages('/admin/trips/list')}>Entrar</button>
    </>
  );
}
