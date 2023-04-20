import { Request, Response } from "express";
import { GetAllOrders } from "../../usecases/Order/getAllOrders";
import { StatusCodes } from "http-status-codes";

export class GetAllOrdersController{
  async handle(req: Request, res: Response){
    try{
      const search = new GetAllOrders();

      //Recebendo lista de Pedidos
      const listOrders = await search.execute();

      //Verificando se existem pedidos cadastrados
      if(listOrders == null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem Pedidos cadastrados"
        })
      }

      //Retornando a lista de Pedidos
      return res.status(StatusCodes.OK).send({
        listOrders,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelos Pedidos"});
    }
  }
}