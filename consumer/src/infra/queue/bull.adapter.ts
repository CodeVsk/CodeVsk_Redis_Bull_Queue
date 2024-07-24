import Queue from "bull";
import IQueue from "./queue";
import Bull from "bull";

export class BullAdapter implements IQueue {
  connection!: Bull.Queue<any>;

  async connect(queueName: string): Promise<void> {
    this.connection = new Queue(queueName, {
      redis: {
        host: "localhost",
        port: 6379,
        password: "dev",
      },
    });
  }

  async consume(queueName: string, callback: Function): Promise<void> {
    this.connection.process(queueName, async (res: any) => {
      await callback(res.data);
    });
  }

  async publisher(queueName: string, data: any): Promise<any> {
    await this.connection.add(queueName, data);
  }

  async close(): Promise<void> {
    this.connection.close();
  }
}
