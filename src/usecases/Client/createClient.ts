import { Client } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeClient {
  username: string,
  hashPassword: string,
  name: string,
  email: string,
  number: string,
  address: string
}

export class CreateClient {
  async execute({username, hashPassword, name, email, number, address}:typeClient):Promise<Client>{
    const newClient = await prisma.client.create({
      data: {
        username: username,
        password: hashPassword,
        name: name,
        email: email,
        number: number,
        address: address
      }
    })

    return newClient;
  }
}