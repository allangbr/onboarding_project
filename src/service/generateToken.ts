const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth");

export class GenerateToken {
  async execute(username:string):Promise<string>{
    return jwt.sign({ username: username }, authConfig.secret, {
      expiresIn: 86400,
    });
  }
}