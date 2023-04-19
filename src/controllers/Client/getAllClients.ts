import { Request, Response } from "express";
import { GetAllClients } from "../../usecases/Client/getAllClients";
import { StatusCodes } from "http-status-codes";

export class GetAllClientsController{
  async handle(req: Request, res: Response){

    try{

      const search = new GetAllClients();

      //Recebendo lista de Clientes
      const listClients = await search.execute();

      //Retornando a lista de Clientes
      return res.status(StatusCodes.OK).send({
       listClients,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelos Cliente"});
    }
  }
}