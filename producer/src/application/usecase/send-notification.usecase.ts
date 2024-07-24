import { MailerEvent } from "../../domain/events/mailer.event";
import IQueue from "../../infra/queue/queue";
import { NotificationDto } from "../dto/notification.dto";

export class SendNotification {
  constructor(private queue: IQueue) {}

  async execute(input: NotificationDto): Promise<void> {
    const { recipient, subject, body } = input;

    const mailerEvent = new MailerEvent(recipient, subject, body);

    this.queue.publisher("mailer", mailerEvent);
  }
}
