import { PrismaClient } from '@prisma/client';

class PrismaConnect {
  public prisma = new PrismaClient();
}

export default PrismaConnect;
