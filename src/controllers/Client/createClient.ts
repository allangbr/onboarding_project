import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { CreateClient } from "../../usecases/Client/createClient";
import { GenerateToken } from "../../service/generateToken";
import { StatusCodes } from "http-status-codes";
const bcrypt = require('bcrypt');

export class CreateClientController{
  async handle(req: Request, res: Response){
    const {username, password, name, email, number, address} = req.body;
    
    //Verificando se o cliente que o usuário deseja cadastrar já existe
    try{
      if(await prisma.client.findUnique({
        where: {
          username: username
        }
      })){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Cliente Já Existente"})
      }

      const create = new CreateClient();

      const generate = new GenerateToken();

      const hashPassword = await bcrypt.hash(password, 10);

      //Criando Cliente
      const client = await create.execute({username, hashPassword, name, email, number, address});

      //Retornando Cliente Cadastrado
      return res.status(StatusCodes.CREATED).send({
        client, token: await generate.execute(username) 
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha no Registro do Cliente"});
    }
  }
}