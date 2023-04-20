import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { DeleteMenuItem } from "../../usecases/MenuItem/deleteMenuItem";
import { StatusCodes } from "http-status-codes";

export class DeleteMenuItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    try{
      //Validando se o item informado existe
      const testMenuItem = await prisma.menuItem.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(testMenuItem == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Item informado não existe"})
      }

      const deleteMenuItem = new DeleteMenuItem();

      //Deletando o Item
      const deletedMenuItem = await deleteMenuItem.execute(Number(id));

      //Retornando o Item
      return res.status(StatusCodes.OK).send({
        deletedMenuItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na exclusão do Item"});
    }
  }
}