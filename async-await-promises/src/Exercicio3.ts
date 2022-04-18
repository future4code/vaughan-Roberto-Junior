import axios from 'axios';
import { BaseURL } from './Base_URL';




    type user = {
        id: string;
        name: string;
        email: string;
    }

    const getSubscribers = async (): Promise<user[]> => {

        return await axios.get(`${BaseURL}/subscribers`)
         .then((res) => {
         return res.data.map((res: user) => {
            return {
              id: res.id,
              name: res.name,
              email: res.email,
            }
          })
        })
        .catch((err) => {
          console.log(err.response);        
        })
     }

    
    getSubscribers();
     
  
  // a) não terá nenhum erro;
  // b) sim deve-se sempre evitar colocar o tipo any nas respostas