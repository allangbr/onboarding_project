import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { CreateOrder } from "../../usecases/Order/createOrder";
import { StatusCodes } from "http-status-codes";

import { GetClient } from "../../usecases/Client/getClient";

export class CreateOrderController{
  async handle(req: Request, res: Response){
    const {client_username} = req.body;
    
    try{

      //Verificando se o cliente referente ao pedido realmente existe
      const search = new GetClient();
      const client = await search.execute(client_username);

      if (client === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Cliente informado não foi encontrado"
        })
      } 

      const create = new CreateOrder();

      //Criando o Pedido
      const order = await create.execute(client_username);

      //Retornando Pedido Cadastrado
      return res.status(StatusCodes.CREATED).send({
        order,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha no Registro do Pedido"});
    }
  }
}