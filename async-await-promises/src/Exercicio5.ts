import axios from 'axios';
import { BaseURL } from './Base_URL';

type user = {
    id: string;
    name: string;
    email: string;
}


// let subscribers: user[] = [];

const getSubscribers = () => {

    return axios.get(`${BaseURL}/subscribers`)
    .then(res => res.data)
    .catch((err)=> {
        err.message;
    })

  };

const getSubscribersIds = (subscribers: any) => {
    return subscribers.map((subscriber:any) => {
        return subscriber.id
    })
}

const sendNotifications = async (subscribers: user[]): Promise<void> => {
  
    try {

      for (const user of subscribers) {

          await axios.post(`${BaseURL}/notifications`, {
            subscriberId: user,
            message: 'Olá'
          }).then(() => {
            console.log('Enviado !');        
          }).catch((err) => {
            console.log(err.message);    
          })
        }
  
        console.log("Todas as Notificações Enviadas !");
      } catch {
          console.log("Error");
      }
  };



  getSubscribers()
  .then(getSubscribersIds)
  .then(sendNotifications);

 

  