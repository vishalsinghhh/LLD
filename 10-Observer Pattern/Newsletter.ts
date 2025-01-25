import { ISubject, IObserver } from "./Observer";

export class Newsletter implements ISubject{
    private subscribers: IObserver[] = [];
    private latestNews: string = ""

    subscribe(observer:IObserver){
        this.subscribers.push(observer)
        console.log("A new subsriber has beed added!");
    }

    unsubscribe(observer: IObserver): void {
        this.subscribers = this.subscribers.filter((sub)=>sub!=observer)
    }

    notify(): void {
        console.log("Notifying all subscribers...");
        for (const subsriber of this.subscribers){
            subsriber.update(this.latestNews)
        }
    }

    publishNews(news:string):void{
        this.latestNews = news
        console.log(`Latest news published ${news}`);
        this.notify()
    }
}