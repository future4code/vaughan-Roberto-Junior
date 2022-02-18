import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useForm from "../Hooks/useForm";
import IconLogin from '../img/iconlogin.png'

const DivLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const DivLogin = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center  ;
 width: 20%;
 background-color: #DCDCDC;
 box-shadow: 1px 1px 20px cyan;

 input{
   margin: 5% 0;
 }

 h1{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;

   img{
     width: 10%;
     height: 20%;
     margin: 0 3%;
   }
 }

 @media (max-width: 600px){
   width: 80%;
 }

`

const ButtonLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 5% 0;
`

export default function LoginPage() {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const requestLogin = () => {

    const aluno = "Roberto-Maia-Vaughan";
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`;

    axios
      .post(url, form)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert("Usuario Não Encontrado !");
      });
  };

  const navigate = useNavigate();

  const FunctionRouterPages = (url) => {
    navigate(url);
  };

  const login = (event) => {
    event.preventDefault();
    requestLogin();
    cleanFields();
  };

  return (
    <DivLoginPage>
      <DivLogin>
      <h1>Login<img src={IconLogin}/></h1>
      <form onSubmit={login}>
        <input
          className="form-control"
          name="email"
          type="text"
          placeholder="Login"
          value={form.email}
          onChange={onChange}
          required
          pattern="^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?"
          title={"insira um email valido"}
        />
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={onChange}
          required
        />
        <ButtonLogin>
        <button className="btn btn-info" onClick={() => FunctionRouterPages("/")}>Voltar</button>
        <button className="btn btn-info">Entrar</button>
        </ButtonLogin>
      </form>
      </DivLogin>
    </DivLoginPage>
  );
}
