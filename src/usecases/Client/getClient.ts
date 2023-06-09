import { Client } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetClient {
  async execute(username:string):Promise<Client | null>{
    const client = await prisma.client.findUnique({
      where: {
        username: username,
      },
    });

    return client;
  }
}