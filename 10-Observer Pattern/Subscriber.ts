import { IObserver } from "./Observer";

export class Subscriber implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} has received the news: ${news}`);
  }
}
