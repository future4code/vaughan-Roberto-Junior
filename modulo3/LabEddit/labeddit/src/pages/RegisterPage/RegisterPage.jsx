import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { goToFeed } from "../../Routes/RedirectPage";
import { BaseURL } from "../../Services/BaseURL";

export default function RegisterPage() {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

    const OnSubmitRegister = (e) => {
        e.preventDefault();
        registerUser();
    }

    const registerUser = () => {
        axios.post(`${BaseURL}/users/signup`, form)
        .then((res) => {
           console.log(res);
           localStorage.setItem('token', res.data.token)
           goToFeed(navigate);
        }).catch((err) => {
            console.log(err);
        })
    }


  return (
    <form onSubmit={OnSubmitRegister}>
      <h1>Registre-se</h1>
      <input
        type="text"
        name="username"
        onChange={onChange}
        className="form-control"
        placeholder="Nome de Usuário"
      />
      <input
        type="email"
        name="email"
        onChange={onChange}
        className="form-control"
        placeholder="Email"
      />
      <input
        type="text"
        name="password"
        onChange={onChange}
        className="form-control"
        placeholder="Senha"
      />
      <button>Cadastrar-se</button>
    </form>
  );
}
