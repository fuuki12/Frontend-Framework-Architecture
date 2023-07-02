// 「/api/users」エンドポイントにGETリクエストを送るとJSON形式でユーザー情報が返されます。
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

// ユーザーデータ
const users = [
  { id: 1, name: "hoge" },
  { id: 2, name: "fuga" },
];

app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
});

app.listen(3000, () => console.log("Server running on port 3000"));
