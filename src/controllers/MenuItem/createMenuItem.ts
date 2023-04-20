import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { CreateMenuItem } from "../../usecases/MenuItem/createMenuItem";
import { StatusCodes } from "http-status-codes";

export class CreateMenuItemController{
  async handle(req: Request, res: Response){
    const {name, description, price} = req.body;
    
    try{
      
      const create = new CreateMenuItem();

      //Criando Item
      const menuItem = await create.execute({name, description, price});

      //Retornando Item Cadastrado
      return res.status(StatusCodes.CREATED).send({
        menuItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha no Registro do Item"});
    }
  }
}