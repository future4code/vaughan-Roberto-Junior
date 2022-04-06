import express, {Response, Request} from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
import connection from './connection';


const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server){
        const address = server.address() as AddressInfo;
        console.log('Backend rodando na porta 3003 !!');
    }else{
        console.log('Erro ao iniciar o back end');
    }
});

//recebe a tabela de atores
app.get('/getAllActor', async(req: Request, res: Response): Promise<void> => {
      try{

        const resultTable = await connection.raw(`
           SELECT * FROM Actor;
        `);

        res.send(resultTable);

      }catch(err: any){
         res.status(500).send(err.message);
      }
});



// app.get('/getActor/:name', async(req: Request, res: Response): Promise<void> => {

//     const gender = req.params.gender

//     try{


//       //recebe um ator pelo nome
//       const getActorForParam = async(): Promise<any> => {

//         const resultTable = await connection('Actor')
//         .where({name: req.params.name});

//         res.send(resultTable);

//       }


//       //recebe a contagem de intens do genero passado
//       const getActorForGender = async(): Promise<any> => {

//         const resultTable = await connection.raw(`
//           SELECT COUNT(gender) as Contagem FROM Actor WHERE gender = "${gender}";
//         `)
         
//         res.send(resultTable);
//       }

//       getActorForParam();
      

//     }catch(err: any){
//        res.status(500).send(err.message);
//     }
// });


// app.put('/editActor/:id/:salary', async(req: Request, res: Response): Promise<void> => {

//           const id = req.params.id;
//           const salary = req.params.salary;

//     try{

//         const updateActor = async(): Promise<any> => {
//             await connection("Actor")
//               .update({
//                 salary: salary,
//               })
//               .where({id: id});

//               res.send('Atualizado com sucesso !')
//           };


//           const deleteActor = async (): Promise<void> => {
//             await connection("Actor")
//               .delete()
//               .where("id", id);

//               res.send('Deletado com sucesso com sucesso !')
//           }; 

//           deleteActor();        

//     }catch(err: any){
//        res.status(500).send(err.message);
//     }
// });

// app.delete("/deleteActor/:id", async(req: Request, res: Response): Promise<any> => {

//     const id = req.params.id

//     try {

//         const deleteActor = async (): Promise<void> => {
//             await connection("Actor")
//               .delete()
//               .where({id: id});

//               res.send('Ator Deletado com sucesso !');
//           }; 

//           deleteActor();   

//     }catch(err: any){
//         res.status(500).send(err.message);
//     }
// })



// app.get("/mediaSalary/:gender", async(req: Request, res: Response): Promise<any> => {

//     const gender = req.params.gender

//     try {

//         const avgSalary = async(): Promise<any> => {

//             const result = await connection("Actor")
//               .avg("salary as contagem")
//               .where({gender: gender});

//             console.log(result[0].contagem);
//             res.status(290).send(`contagem: ${result[0].contagem}`);

//           }; 

//           avgSalary();

//     }catch(err: any){

//         res.status(500).send(err.message);

//     }
// })



// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);
  
//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({ message: err.message });
//     }
//   });

//   const getActorById = async(id: string): Promise<any> => {
//       const result = await connection('Actor').where({id: id});

//       return result
//   }


//   app.get("/actor", async (req: Request, res: Response): Promise<any> => {
//     try {
//       const gender = req.query.gender;

//       const quantity = await getActorByGender(gender as string);
  
//       res.status(200).send(`Quantidade: ${quantity[0].Conta}`);
//     } catch (err) {
//       res.status(400).send({ message: err.message });
//     }
//   });

//   const getActorByGender = async(gender: string): Promise<any> => {

//     const result = await connection('Actor').count('gender as Conta').where({gender: gender})

//     return result
// }



// app.post("/actor", async (req: Request, res: Response) => {
//     try {
//       await createActor(
//         new Date().getTime().toString(),
//         req.body.name,
//         req.body.salary,
//         new Date(req.body.birth_date),
//         req.body.gender
//       );
  
//       res.status(200).send('Ator criado com sucesso !');
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });

//   const createActor = async(id: string, name: string, salary: number, date: Date, gender: string): Promise<any> => {
     
//    await connection('Actor').insert({
//         id: id, 
//         name: name, 
//         salary: salary, 
//         birth_date: date, 
//         gender: gender
//     });
//   }


app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Salario Atualizado !",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const updateSalary = async(id: string, salary: number): Promise<any> => {
     
    await connection('Actor').update({salary: salary}).where({id: id});

   }


app.delete("/actor/:id", async (req: Request, res: Response) => {
    try { 

      await deleteActor(req.params.id);

      res.send('Ator deletado com sucesso !');
      
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  const deleteActor = async(id: string): Promise<any> => {
     
    await connection('Actor').delete().where({id: id});

   }