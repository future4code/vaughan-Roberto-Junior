import axios from 'axios';
import { BaseURL } from './Base_URL';



    type user = {
        id: string;
        name: string;
        email: string;
    }

    const postNews = async (): Promise<any> => {


        const body = {
            title: "Noticia fake",
            content: "essa é uma noticia falsa, não acredite nela",
            date: Date.now()
        }


        await axios.put(`${BaseURL}/news`, body)
              .then((res) => {
                  console.log('Post Criado Com sucesso !');
              })
              .catch((err) => {
                  console.log(err.message);            
              })
  
  }

  // uma função assincrona pois faz uma requisição ao banco

  postNews();