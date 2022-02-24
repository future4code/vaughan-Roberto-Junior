import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/UseForm";
import { TitleHome, PricipalLogin} from "./styled";
import { LoginAction } from "./request";
import FormLoginPage from "./components/FormLoginPage";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const OnSubmitLogin = (e) => {
    e.preventDefault();
    LoginAction(form, clear, navigate);
  };


  return (
    <PricipalLogin>
      <TitleHome><span>Lab</span><i>Eddit</i></TitleHome>
      <FormLoginPage 
      OnSubmitLogin={OnSubmitLogin}
      form={form}
      onChange={onChange}
      />
    </PricipalLogin>
  );
}
