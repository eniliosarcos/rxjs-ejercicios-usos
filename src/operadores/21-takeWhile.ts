import { fromEvent, Observer } from "rxjs";
import {map, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({
        x,
        y
    })),
    // takeWhile(({y})=> y <= 150)
    takeWhile(({y})=> y <= 150, true) // el true hace que se imprima el valor que rompe la condicion
)
.subscribe(observer);