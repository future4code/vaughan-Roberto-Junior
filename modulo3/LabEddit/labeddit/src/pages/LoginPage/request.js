import axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL } from "../../Services/BaseURL";


  export const LoginAction = (form, clear, navigate) => {

    const [state, setState] = useState(true);

    // useEffect(()=>{
    //   loginPage();
    // },[])


const loginPage = () => {

  axios
      .post(`${BaseURL}/users/login`, form)
      .then((res) => {
          console.log('deu certo !');
        localStorage.setItem("token", res.data.token);
        clear();
        navigate("/FeedPage");
      })
      .catch((err) => {
          setState(false);
        setTimeout(() =>{
          setState(true);
        }, 3000)       
        clear();
        console.log(err);
      });

}
    

      return [state, loginPage]; 
  };