import { MenuItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeMenuItem {
  name: string,
  description: string,
  price: number
}

export class UpdateMenuItem {
  async execute(id:number, {name, description, price}:typeMenuItem):Promise<MenuItem>{
    const updateMenuItem = await prisma.menuItem.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        price: price
      }
    })

    return updateMenuItem;
  }
}