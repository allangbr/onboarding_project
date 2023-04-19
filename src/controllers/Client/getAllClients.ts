import { Request, Response } from "express";
import { GetAllClient } from "../../usecases/Client/getAllClients";
import { StatusCodes } from "http-status-codes";

export class GetAllClientController{
  async handle(req: Request, res: Response){

    try{

      const search = new GetAllClient();

      //Recebendo lista de Clientes
      const listClients = await search.execute();

      //Retornando a lista de Clientes
      return res.status(StatusCodes.OK).send({
       listClients,
      },);
    } catch (err){
      return res.status(StatusCodes.NOT_FOUND).send({error: "Falha na busca pelos Cliente"});
    }
  }
}