import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/post", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params.id;
  const post = await prisma.post.findOne({
    where: { id },
  });
  res.json(post);
});

app.post("/post", async (req, res) => {
  const { title, content, authorId } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      User: { connect: { id: authorId } },
    },
  });
  res.json(post);
});

app.put("/post/:id", async (req, res) => {
  const { id } = req.params.id;
  const { title, content } = req.body;
  const post = await prisma.post.update({
    where: { id },
    data: { title, content },
  });
  res.json(post);
});

app.delete("/post:id", async (req, res) => {
  const { id } = req.params.id;
  const post = await prisma.post.delete({
    where: { id },
  });
  req.json(post);
});

app.listen(PORT, () => {
  console.log("server is running");
});
