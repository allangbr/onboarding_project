import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { UpdateClient } from "../../usecases/Client/updateClient"; 
import { StatusCodes } from "http-status-codes";

export class UpdateClientController{
  async handle(req: Request, res: Response){
    const { username } = req.params;
    const {password, name, email, number, address} = req.body;

    try{
      const testClient = await prisma.client.findUnique({
        where: {
          username: username
        }
      })
      if(testClient == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Cliente informado não existe"})
      }

      const update = new UpdateClient();

      //Atualizando Cliente
      const client = await update.execute({username, password, name, email, number, address});

      //Retornando Cliente Atualizado
      return res.status(StatusCodes.CREATED).send({
        client,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Atualização do Cliente"});
    }
  }
}