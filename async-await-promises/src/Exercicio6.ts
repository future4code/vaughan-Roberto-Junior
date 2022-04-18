import axios from 'axios';
import { BaseURL } from './Base_URL';

type user = {
    id: string;
    name: string;
    email: string;
}


async function getSubscribers(): Promise<any> {

    return axios.get(`${BaseURL}/subscribers`)
    .then(res => 
        res.data
    )
    .catch((err)=> {
        return err.message;
    })

  };


const sendNotifications = async (users: user[]): Promise<void> => {

      try {

        const promises = users.map(user => {

          axios.post(`${BaseURL}/notifications`, {
            subscriberId: user,
            message: 'mensagem Enviada !'
          }).then(()=>console.log('Enviado !!')
          )
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };


  getSubscribers().then(sendNotifications);