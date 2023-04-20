import { Request, Response } from "express";
import { GetMenuItem } from "../../usecases/MenuItem/getMenuItem";
import { StatusCodes } from "http-status-codes";

export class GetMenuItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    try{

      const search = new GetMenuItem();

      //Recebendo o Item buscado
      const menuItem = await search.execute(Number(id));

      //Verificando se o item foi encontrado
      if (menuItem === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Item não encontrado"
        })
      } 

      //Retornando o item
      return res.status(StatusCodes.OK).send({
        menuItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelo Item"});
    }
  }
}