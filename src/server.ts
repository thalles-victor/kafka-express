import express from "express";
import { sendMessage } from "./producer";

const app = express();

app.use(express.json());

app.post("/", async (request, response) => {
  const { message } = request.body;

  await sendMessage(message);

  return response.status(200).send("enviado");
});

app.listen(3333, () => {
  console.log(`Server running at http://localhost:3000`);
});
