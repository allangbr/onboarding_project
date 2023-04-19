import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { CreateClient } from "../../usecases/Client/createClient";
var HTTPStatusCode = require('http-status-code');

export class CreateClientController{
  async handle(req: Request, res: Response){
    const {username, password, name, email, number, address} = req.body;

    try{
      if(await prisma.client.findUnique({
        where: {
          username: username
        }
      })){
        return res.status(401).send({error: "Cliente Já Existente"})
      }

      const create = new CreateClient();

      //Criando Client
      const client = await create.execute({username, password, name, email, number, address});

      //Retornando Membro Cadastrado
      return res.send({
        client,
      },);
    } catch (err){
      return res.status(404).send({error: err});
    }
  }
}