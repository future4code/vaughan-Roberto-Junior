import axios from 'axios';
import { BaseURL } from './Base_URL';

type user = {
    id: string;
    name: string;
    email: string;
}


let subscribers: user[] = [];
let message = 'Olá';

async function getSubscribers(): Promise<any> {

    await axios.get(`${BaseURL}/subscribers`)
    .then((res) => {
        return res.data
    })
    .catch((err)=> {
        return err.message;
    })

  };

const sendNotifications = async (subscribers: user[], message: string): Promise<void> => {
  
    try {

          for (const user of subscribers) {

          await axios.post(`${BaseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("Todas as Notificações Enviadas !");
      } catch {
          console.log("Error");
      }
  };

  getSubscribers()

  sendNotifications(subscribers, message);

  