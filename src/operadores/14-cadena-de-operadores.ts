import { from, fromEvent, Observer, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // recibe keyboardEvent, emite un string
    filter(code => code === 'Enter')
);

keyup$.subscribe(observer);