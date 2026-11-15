import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    handleClick() {
        obj.count += 1;
    },
    subscribe() {
        EventEmitter.on('click', this.handleClick);
    },
    unsubscribe() {
        EventEmitter.off('click', this.handleClick);
    },
};

export const obj1 = {
    first(...args) {
        return this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};
