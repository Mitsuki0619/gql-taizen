import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// 全投稿取得
app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(posts);
});

// id指定の投稿を取得
app.get("/post:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.findOne({
    where: { id: parseInt(id) },
  });
  res.json(post);
});

// 投稿追加
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

// 投稿更新
app.put("/post:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { title, content },
  });
  res.json(post);
});

// 投稿削除
app.delete("/post:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: parseInt(id) },
  });
  res.json(post);
});

app.listen(PORT, () => {
  console.log("server is running");
});
