import { MenuItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeMenuItem {
  name: string,
  description: string,
  price: number
}

export class CreateMenuItem {
  async execute({name, description, price}:typeMenuItem):Promise<MenuItem>{
    const newMenuItem = await prisma.menuItem.create({
      data: {
        name: name,
        description: description,
        price: price
      }
    })

    return newMenuItem;
  }
}