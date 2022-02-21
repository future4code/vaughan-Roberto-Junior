import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { BaseURL } from "../../Services/BaseURL";

export default function LoginPage() {

    const navigate = useNavigate();

    const [form, onChange, clear] = useForm({email: '', password: ''})

    const OnSubmitLogin = (e) => {
        e.preventDefault();
        LoginAction();
    }

    const LoginAction = () => {
        
        axios.post(`${BaseURL}/users/login`, form)
        .then((res) => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            clear();
            navigate('/FeedPage');
        })
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <form onSubmit={OnSubmitLogin}>
      <h1>LoginPage</h1>
      <input type="text" name='email' onChange={onChange} class="form-control" placeholder="Email" />
      <input type="text" name='password' onChange={onChange} class="form-control" placeholder="Senha" />
      <button>Fazer Login</button>
      <button>Cadastrar-se</button>
    </form>
  );
}
