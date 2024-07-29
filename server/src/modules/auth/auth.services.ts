import httpStatus from "http-status";
import APIError from "../../errorHandler/APIError";
import { IUser } from "../../interfaces/common";
import PrismaConnect from "../../lib/PrismaConnect";
import password from "../../utils/password";
import token from "../../utils/token";

class Services extends PrismaConnect {

  // register 
  async register(payload: IUser) {
    const hashedPassword = await password.hash(payload.password);
    payload.password = hashedPassword

    return this.prisma.user.create({ data: payload });
  }


  // login 
  async login(payload: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: payload.email } });

    if (user) {
      await password.verify(payload.password, user.password);

      const authToken = token.generate({ id: user.id, email: user.email, role: user.role });
      return { token: authToken };
    } else {
      throw new APIError(httpStatus.BAD_REQUEST, 'WrongCredentials');
    }
  }

  // get self profile
  async self(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}

const authServices = new Services();
export default authServices;