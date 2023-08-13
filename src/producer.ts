import { kafka } from "./kafka/kafka";
import { Partitioners } from "kafkajs";

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

async function connect() {
  await producer.connect();
}
connect();

export async function sendMessage(message: string) {
  const messageToSend = {
    message: message,
    at: new Date(),
  };

  await producer.send({
    topic: "test-topic",
    messages: [{ value: JSON.stringify(messageToSend) }],
  });
}
