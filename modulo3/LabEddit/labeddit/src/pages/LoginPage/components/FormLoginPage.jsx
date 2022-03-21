import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../../Routes/RedirectPage";
import { DivLogin } from "../styled";


export default function FormLoginPage(props){

  const state = props.state;

    
  const navigate = useNavigate();
    return(
        <DivLogin>
        {!state ?
        <div className="alert alert-danger" role="alert">
           Usuário Não Encontrado !
        </div> :
        null}
        <form onSubmit={props.OnSubmitLogin}>
          <h1>Faça seu login</h1>
          <input
            type="email"
            name="email"
            value={props.form.email}
            onChange={props.onChange}
            className="form-control"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={props.form.password}
            onChange={props.onChange}
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
    )
}