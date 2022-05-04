import * as jwt from "jsonwebtoken";

export type authenticationData = {
  id: string;
  role: string;
};

export class Token {
  generateToken(payload: authenticationData) {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "5h",
    });
  }

  validationToken(token: string){
      return jwt.verify(token, process.env.JWT_KEY as string);
  }
}
