export interface IObserver{
    update(news:string):void
}

export interface ISubject{
    subscribe(observer: IObserver):void
    unsubscribe(observer: IObserver):void
    notify(): void
}