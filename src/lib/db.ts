import { PrismaClient } from "@prisma/client";
import "server-only";

declare global {
  var cachedPrisma: PrismaClient;
}

export let prisma: PrismaClient;

/**
 * This is here just to save some resources during hot reloads
 * If in production: It would create a new PrismaClient and just use that [Line: 16]
 * If in development: It would check if a PrismaClient was cached [Line: 18]
 * --> If Not: Create a new PrismaClient [Line: 20]
 * --> Else: Use the cached Prisma Client [Line: 24]
 */
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }

  prisma = global.cachedPrisma;
}

// More like a singleton design pattern
