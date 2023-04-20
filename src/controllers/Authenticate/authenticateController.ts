import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { GetClient } from "../../usecases/Client/getClient";
import { StatusCodes } from "http-status-codes";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require("../../config/auth");

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

      const token = jwt.sign({ username: client.username }, authConfig.secret, {
        expiresIn: 86400,
      });

      //Retornando Cliente
      return res.status(StatusCodes.OK).send({
        client, token
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Autenticação"});
    }
  }
}