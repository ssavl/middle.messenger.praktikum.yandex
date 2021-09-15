interface IListener {
    [key: string]: IFunction[];
}
interface IFunction {
    callback: () => void;
}

class EventBus {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(public listeners?: IListener[] | any) {
        this.listeners = {};
    }

    on(event: string, callback: unknown): void {
        if (this.listeners[event] === null || !this.listeners[event]) {
            this.listeners[event] = [callback];
        } else {
            this.listeners[event].push(callback);
        }
    }

    off(event: string, callback: () => void): void {
        if (this.listeners[event] === null || !this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            (listener: () => void) => listener !== callback
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    emit(event: string): void {
        if (this.listeners[event] === null || !this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(function (listener: () => void) {
            listener();
        });
    }
}

export default EventBus;