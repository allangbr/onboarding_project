import { MenuItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetMenuItem {
  async execute(id:number):Promise<MenuItem | null>{
    const menuItem = await prisma.menuItem.findUnique({
      where: {
        id: id,
      },
    });

    return menuItem;
  }
}