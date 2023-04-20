import { Request, Response } from "express";
import { GetAllMenuItems } from "../../usecases/MenuItem/getAllMenuItems";
import { StatusCodes } from "http-status-codes";

export class GetAllMenuItemsController{
  async handle(req: Request, res: Response){
    try{
      const search = new GetAllMenuItems();

      //Recebendo lista de Itens
      const listMenuItems = await search.execute();

      //Verificando se existem itens cadastrados
      if(listMenuItems == null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem Itens cadastrados"
        })
      }

      //Retornando a lista de Itens
      return res.status(StatusCodes.OK).send({
        listMenuItems,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelos Itens"});
    }
  }
}