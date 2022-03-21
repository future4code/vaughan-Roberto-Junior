import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { TitleHome, PricipalLogin} from "./styled";
import { LoginAction } from "./request";
import FormLoginPage from "./components/FormLoginPage";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [state, loginPage] = LoginAction(form, clear, navigate);
  

  const OnSubmitLogin = (e) => {
    e.preventDefault();
    loginPage();
  };

  return (
    <PricipalLogin>
      <TitleHome><span>Lab</span><b>Eddit</b></TitleHome>
      <FormLoginPage 
      OnSubmitLogin={OnSubmitLogin}
      form={form}
      onChange={onChange}
      state={state}
      />
    </PricipalLogin>
  );
}
