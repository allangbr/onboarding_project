import { Request, Response } from "express";
import { GetOrder } from "../../usecases/Order/getOrder";
import { StatusCodes } from "http-status-codes";

export class GetOrderController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    try{

      const search = new GetOrder();

      //Recebendo o Pedido buscado
      const order = await search.execute(Number(id));

      //Verificando se o pedido foi encontrado
      if (order === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Pedido não encontrado"
        })
      } 

      //Retornando o pedido
      return res.status(StatusCodes.OK).send({
        order,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelo Pedido"});
    }
  }
}