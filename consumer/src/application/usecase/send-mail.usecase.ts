import { MailerEvent } from "../../domain/events/mailer.event";

export class SendMail {
  async execute(event: MailerEvent): Promise<void> {
    const data: any = {
      recipient: event.recipient,
      subject: event.subject,
      body: event.body,
    };

    console.table(data);
  }
}
