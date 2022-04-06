### Exercicio 1

a) quando ultiliza o raw recebemos a tabela e varias outras informações
b) const searchActor = async (name: string): Promise<any> => {
     const result = await connection.raw(`
       SELECT * FROM Actor WHERE name = "${name}"
  `)
    return result
}

c) const countActors = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
       SELECT COUNT(*) as contagem FROM Actor WHERE gender = "${gender}"
   `);

  const count = result[0][0].contagem;

    return count;

};


### Exercicio 2

a)  const updateActor = async(): Promise<any> => {
            await connection("Actor")
              .update({
                salary: salary,
              })
              .where({id: id});
          };


b)  const deleteActor = async (): Promise<void> => {
            await connection("Actor")
              .delete()
              .where({id: id});

              res.send('Ator Deletado com sucesso !');
          }; 


c)  const avgSalary = async(): Promise<any> => {

            const result = await connection("Actor")
              .avg("salary as contagem")
              .where({gender: gender});

            console.log(result[0].contagem);
            res.status(290).send(`contagem: ${result[0].contagem}`);

          }; 


### Exercicio 3

a) app.get("/actor/:id", async (req: Request, res: Response) => {
        try {
        const id = req.params.id;
        const actor = await getActorById(id);
    
        res.status(200).send(actor)
        } catch (err) {
        res.status(400).send({ message: err.message });
        }
    });

  const getActorById = async(id: string): Promise<any> => {
      const result = await connection('Actor').where({id: id});

      return result
  }


b)   app.get("/actor", async (req: Request, res: Response): Promise<any> => {
            try {
            const gender = req.query.gender;

            const quantity = await getActorByGender(gender as string);
        
            res.status(200).send(`Quantidade: ${quantity[0].Conta}`);
            } catch (err) {
            res.status(400).send({ message: err.message });
            }
        });

  const getActorByGender = async(gender: string): Promise<any> => {

    const result = await connection('Actor').count('gender as Conta').where({gender: gender})

    return result
}


### Exercicio 4

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        new Date().getTime().toString(),
        req.body.name,
        req.body.salary,
        new Date(req.body.birth_date),
        req.body.gender
      );
  
      res.status(200).send('Ator criado com sucesso !');
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  const createActor = async(id: string, name: string, salary: number, date: Date, gender: string): Promise<any> => {
     
   await connection('Actor').insert({
        id: id, 
        name: name, 
        salary: salary, 
        birth_date: date, 
        gender: gender
    });
  }


  a) 
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

b) 
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

