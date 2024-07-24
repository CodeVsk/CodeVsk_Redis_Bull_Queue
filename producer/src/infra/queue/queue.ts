export default interface IQueue {
  connect(queueName?: string): Promise<void>;
  consume(queueName: string, callback: Function): Promise<void>;
  publisher(queueName: string, data: any): Promise<any>;
  close(): Promise<void>;
}
