import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import IconLogin from "../../img/iconlogin.png";
import  {DivLoginPage, DivLogin, ButtonLogin} from './styles'


export default function LoginPage() {

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const [alert, setAlert] = useState(false);

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
        setAlert(true)
        setTimeout(()=>{
          setAlert(false);
        }, 3000)
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

  const alertError = () => {
    return (
      <div class="alert alert-danger" role="alert">
        Usuario Não Encontrado !
      </div>
    );
  };

  console.log(alert);

  return (
    <DivLoginPage>
      <DivLogin>
        <h1>
          Login
          <img src={IconLogin} />
        </h1>
        {alert && alertError()}
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
            <button
              className="btn btn-info"
              onClick={() => FunctionRouterPages("/")}
            >
              Voltar
            </button>
            <button className="btn btn-info">Entrar</button>
          </ButtonLogin>
        </form>
      </DivLogin>
    </DivLoginPage>
  );
}
