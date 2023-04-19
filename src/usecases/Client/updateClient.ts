import { Client } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeClient {
  username: string,
  password: string,
  name: string,
  email: string,
  number: string,
  address: string
}

export class UpdateClient {
  async execute({username, password, name, email, number, address}:typeClient):Promise<Client>{
    const updateClient = await prisma.client.update({
      where: {
        username: username,
      },
      data: {
        username: username,
        password: password,
        name: name,
        email: email,
        number: number,
        address: address
      }
    })

    return updateClient;
  }
}