import { Request, Response } from "express";
import { GetAllOrderItems } from "../../usecases/OrderItem/getAllOrderItems";
import { StatusCodes } from "http-status-codes";

export class GetAllOrderItemsController{
  async handle(req: Request, res: Response){
    try{
      const search = new GetAllOrderItems();

      //Recebendo lista de Pedidos de Itens
      const listOrdersItems = await search.execute();

      //Verificando se existem pedidos de itens cadastrados
      if(listOrdersItems == null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem Pedidos de Itens cadastrados"
        })
      }

      //Retornando a lista de Pedidos de Itens
      return res.status(StatusCodes.OK).send({
        listOrdersItems,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelos Pedidos de Itens"});
    }
  }
}