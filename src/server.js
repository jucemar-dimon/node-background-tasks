import "dotenv/config";
import express from "express";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

import UserController from "./app/controllers/UserController";

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.post("/users", UserController.store);

app.use("/admin/queues", BullBoard.UI);

app.listen(process.env.PORT, () => {
  console.log(`O servidor foi iniciado na porta ${process.env.PORT}`);
});
