import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { GenerateToken } from "../../service/generateToken";
import { StatusCodes } from "http-status-codes";
const bcrypt = require('bcrypt');

export class AuthenticateController{
  async handle(req: Request, res: Response){
    const {username, password} = req.body;
    try{
      //Verificando se o cliente informado existe
      const client = await prisma.client.findUnique({
        where: {
          username: username
        }
      })
      if(client == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Cliente informado não existe"})
      }

      if (!await bcrypt.compare(password, client.password)){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Senha incorreta"})
      }

      const generate = new GenerateToken();

      //Retornando Cliente com o Token
      return res.status(StatusCodes.OK).send({
        client, token: await generate.execute(username) 
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Autenticação"});
    }
  }
}