import { fromEvent, interval, map, mergeMap, Observer, of, take, takeUntil } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const letras$ = of('a','b', 'c');

// letras$.pipe(
//     mergeMap( (letra) => interval(1000).pipe(
//         map(i => letra + i),
//         take(3)
//     ))
// )
// .subscribe(observer)

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
.subscribe(console.log)