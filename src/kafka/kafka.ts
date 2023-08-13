import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "random-client",
  brokers: ["localhost:9094"],
  sasl: {
    mechanism: "plain", // scram-sha-256 or scram-sha-512
    username: "USER_FROM_KAFKA",
    password: "MUST_BE_STRONG_A_PASSWORD",
  },
});
