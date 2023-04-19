import { Request, Response } from "express";
import { GetClient } from "../../usecases/Client/getClient";
import { StatusCodes } from "http-status-codes";

export class GetAllClientController{
  async handle(req: Request, res: Response){
    const { username } = req.params;
    try{

      const search = new GetClient();

      //Recebendo o Cliente buscado
      const client = await search.execute(username);

      if (client === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Cliente não encontrado"
        })
      } 

      //Retornando o cliente
      return res.status(StatusCodes.OK).send({
        client,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelo Cliente"});
    }
  }
}