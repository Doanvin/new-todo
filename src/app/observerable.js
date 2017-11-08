export class Observable {
    constructor() {
        this.subscriptions = [];
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

    unsubscribe(callback) {
        this.subscriptions = this.subscriptions.filter(subscriber => subscriber !== callback);
    }

    publish(data) {
        this.subscriptions.forEach(subscriber => subscriber(data));
    }
}
