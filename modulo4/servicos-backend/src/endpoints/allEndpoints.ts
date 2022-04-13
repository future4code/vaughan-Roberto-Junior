import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { getAddressInfo } from '../index';
import connection from '../connection';

const app = express();

app.use(express.json());
app.use(cors());



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


app.post('/createAddress', async(req, res) => {

     const {cep , numero, complemento} = req.body

     try {

      let complementoOpcional = complemento;

      if(!cep || !numero){
         throw new Error('os campos cep e numero são Obrigatorios !')
      }

      if(typeof cep != 'string' || typeof numero != 'string'){
         throw new Error('Cep e numero deve ser do tipo string !')
      }

      if(!complementoOpcional){
         complementoOpcional = 'Sem Complemento';
      }

       const result = await getAddressInfo(cep);

       await connection('Address').insert({
          CEP: cep,
          Logradouro: result.Logradouro,
          Numero: numero,
          Complemento: complementoOpcional,
          Bairro: result.Bairro,
          Cidade: result.Cidade,
          Estado: result.Estado
       })


       res.status(201).send('Endereço Cadastrado Com sucesso !')
        
     } catch (error) {

         res.status(500).send('Algo Inesperado Aconteceu !');
        
     }
})