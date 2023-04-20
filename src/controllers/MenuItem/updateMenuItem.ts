import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { UpdateMenuItem } from "../../usecases/MenuItem/updateMenuItem";
import { StatusCodes } from "http-status-codes";

export class UpdateMenuItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    const {name, description, price} = req.body;

    //Validando se o item informado existe
    try{
      const testMenuItem = await prisma.menuItem.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(testMenuItem == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Item informado não existe"})
      }

      const update = new UpdateMenuItem();

      //Atualizando o Item
      const menuItem = await update.execute(Number(id), {name, description, price});

      //Retornando Item Atualizado
      return res.status(StatusCodes.CREATED).send({
        menuItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Atualização do Item"});
    }
  }
}