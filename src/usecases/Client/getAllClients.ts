import { Client } from "@prisma/client";
import { prisma } from "../../service/prisma";


export class CreateClient {
  async execute():Promise<Client[]>{
    return await prisma.client.findMany()
  }
}