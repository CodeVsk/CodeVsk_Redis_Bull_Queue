import { SendMail } from "./application/usecase/send-mail.usecase";
import { MailerEvent } from "./domain/events/mailer.event";
import { BullAdapter } from "./infra/queue/bull.adapter";

function main(): void {
  const queue = new BullAdapter();
  queue.connect("mailer");

  const usecase = new SendMail();

  queue.consume("mailer", (event: MailerEvent) => usecase.execute(event));
}

main();
