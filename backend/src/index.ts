import express, { Express, Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

const app: Express = express();
const port = process.env.BACKEND_PORT;

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
  //   const allUsers = await User.find();
  //   res.json({ users: allUsers });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
