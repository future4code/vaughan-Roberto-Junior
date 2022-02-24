import axios from "axios";
import { BaseURL } from "../../Services/BaseURL";


  export const LoginAction = (form, clear, navigate) => {

    axios
      .post(`${BaseURL}/users/login`, form)
      .then((res) => {
          console.log('deu certo !');
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