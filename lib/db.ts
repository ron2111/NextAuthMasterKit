import { PrismaClient } from "@prisma/client"

declare global { // globally declared
    var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

// did this because of next hot-reload
// it wwould have initialized a prisma client on every reload

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;