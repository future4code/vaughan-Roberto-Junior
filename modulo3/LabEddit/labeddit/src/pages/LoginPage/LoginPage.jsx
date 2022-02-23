import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { BaseURL } from "../../Services/BaseURL";
import { goToSignUp } from "../../Routes/RedirectPage";
import { DivLogin, TitleHome, PricipalLogin} from "./styled";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const OnSubmitLogin = (e) => {
    e.preventDefault();
    LoginAction();
  };

  const LoginAction = () => {
    axios
      .post(`${BaseURL}/users/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/FeedPage");
      })
      .catch((err) => {
        alert("Usuario Não Encontrado !");
        clear();
        console.log(err);
      });
  };

  return (
    <PricipalLogin>
      <TitleHome><span>Lab</span><i>Eddit</i></TitleHome>
      <DivLogin>
        <form onSubmit={OnSubmitLogin}>
          <h1>Faça seu login</h1>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="form-control"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            className="form-control"
            placeholder="Senha"
            required
          />
          <button className="btn btn-primary">Fazer Login</button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => goToSignUp(navigate)}
          >
            Cadastre-se
          </button>
        </form>
      </DivLogin>
    </PricipalLogin>
  );
}
