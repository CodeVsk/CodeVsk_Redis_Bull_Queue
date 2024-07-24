export class MailerEvent {
  constructor(
    readonly recipient: string,
    readonly subject: string,
    readonly body: string
  ) {}
}
