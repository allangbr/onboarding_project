import { Request, Response } from "express";
import { CreateOrderItem } from "../../usecases/OrderItem/createOrderItem";
import { GetOrder } from "../../usecases/Order/getOrder";
import { GetMenuItem } from "../../usecases/MenuItem/getMenuItem";
import { StatusCodes } from "http-status-codes";

export class CreateOrderItemController{
  async handle(req: Request, res: Response){
    const {order_id, item_id, amount} = req.body;
    
    try{

      //Verificando se o pedido informado existe
      const searchOrder = new GetOrder();
      const order = await searchOrder.execute(order_id);

      if (order === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "O pedido informado não foi encontrado"
        })
      }
      
      //Verificando se o item informado existe
      const searchMenuItem = new GetMenuItem();
      const item = await searchMenuItem.execute(order_id);

      if (item === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "O item informado não foi encontrado"
        })
      } 
      
      const create = new CreateOrderItem();

      //Criando Pedido de Item
      const orderItem = await create.execute({order_id, item_id, amount});

      //Retornando Pedido do item Cadastrado
      return res.status(StatusCodes.CREATED).send({
        orderItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha no Registro do Item do Pedido"});
    }
  }
}