import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
const authConfig = require("../config/auth");
const jwt = require('jsonwebtoken');

export class AuthMiddleware{
  async execute(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    //Verificando se o usuário inseriu o token de verificação na requisição
    if (!authHeader){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token de autorização não fornecido"})
    }

    //Verificando se o token fornecido está correto
    const parts = authHeader.split(' ');
    
    if(!(parts.length === 2)){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Erro no token"})
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token mal formatado"})
    }

    jwt.verify(token, authConfig.secret, (err:any, decoded:any) => {
      if (err) {
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token inválido"})
      }

      req.body.username = decoded.username;
    })

    return next();
  }
}