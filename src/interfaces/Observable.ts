import Observer from "./Observer";

interface Observable {
    subscribe(observer: Observer): void;

    subscribeAll(observer: Observer): void;

    unsubscribe(observer: Observer): void;

    notify(): void;
}

export default Observable;