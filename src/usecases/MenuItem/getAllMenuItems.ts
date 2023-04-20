import { MenuItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetAllMenuItems {
  async execute():Promise<MenuItem[]>{
    return await prisma.menuItem.findMany()
  }
}