import { NotificationDto } from "../src/application/dto/notification.dto";
import { SendNotification } from "../src/application/usecase/send-notification.usecase";
import { BullAdapter } from "../src/infra/queue/bull.adapter";

test("Devo enviar um email para um usuário qualquer.", async () => {
  const queue = new BullAdapter();

  await queue.connect("mailer");

  const usecase = new SendNotification(queue);

  const input: NotificationDto = {
    recipient: "dev@enterprise.com",
    subject: "Redis with Bull",
    body: "Hello World!",
  };

  await usecase.execute(input);

  queue.close();
});
