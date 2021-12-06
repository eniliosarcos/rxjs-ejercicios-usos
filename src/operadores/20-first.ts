import { fromEvent, Observer } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap<PointerEvent>(console.log),
    map(({clientX, clientY}) => ({
        clientY,
        clientX
    })),
    first( event => event.clientY>=150)


    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    // first( event => event.clientY>=150)
)
.subscribe(observer);