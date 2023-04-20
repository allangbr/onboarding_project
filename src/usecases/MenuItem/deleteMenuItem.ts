import { MenuItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class DeleteMenuItem {
  async execute(id:number):Promise<MenuItem>{
    const deletedMenuItem = await prisma.menuItem.delete({
      where: {
        id: id,
      },
    });

    return deletedMenuItem;
  }
}