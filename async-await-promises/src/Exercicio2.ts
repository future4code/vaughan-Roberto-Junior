import axios from 'axios';
import { BaseURL } from './Base_URL';


    const getSubscribers = async(): Promise<any> => {

    await axios.get(`${BaseURL}/subscribers`)
      .then((res) =>{
        console.log(res.data);  
      })
      .catch((err) => {
        console.log(err.response);   
      })     
    }; 
  
  
     
// Na funcão nomeada o async deve vir antes dos parenteses dos parametros
  
getSubscribers();
  