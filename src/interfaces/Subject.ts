import { Observer } from "./Observer";

export interface Subject {
    notifyObserver(): void;
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
}
