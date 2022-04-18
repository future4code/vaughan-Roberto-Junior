import axios from 'axios';
import { BaseURL } from './Base_URL';



async function getSubscribers(): Promise<any> {

    await axios.get(`${BaseURL}/subscribers`)
    .then((res) => {
      return res.data
    })
    .catch((err)=> {
      return err.message;
    })

  };



getSubscribers();



// a)  https://labenews.herokuapp.com/subscribers;
// b) :Promisse<any>