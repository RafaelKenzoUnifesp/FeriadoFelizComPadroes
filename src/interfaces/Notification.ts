export interface Notification {
    send(to: string, message: string): void;
    getChannel(): string;
}