import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { DeleteClient } from "../../usecases/Client/deleteClient";
import { StatusCodes } from "http-status-codes";

export class DeleteClientController{
  async handle(req: Request, res: Response){
    const { username } = req.params;
    try{
      //Verificando se o cliente informado existe
      const testClient = await prisma.client.findUnique({
        where: {
          username: username
        }
      })
      if(testClient == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Cliente informado não existe"})
      }

      const deleteClient = new DeleteClient();

      //Deletando o Cliente
      const deletedClient = await deleteClient.execute(username);

      //Retornando o cliente
      return res.status(StatusCodes.OK).send({
        deletedClient,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelo Cliente"});
    }
  }
}