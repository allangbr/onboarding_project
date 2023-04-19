import { Client } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class DeleteClient {
  async execute(username:string):Promise<Client>{
    const deletedClient = await prisma.client.delete({
      where: {
        username: username,
      },
    });

    return deletedClient;
  }
}