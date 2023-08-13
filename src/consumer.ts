import { stat } from "fs";
import { kafka } from "./kafka/kafka";

const consumer = kafka.consumer({
  groupId: "test-group1",
  allowAutoTopicCreation: true,
});

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value?.toString() ?? "nenhuma messagem",
      });
    },
  });
}

start();
