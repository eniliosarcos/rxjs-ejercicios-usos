import { fromEvent, Observer, range } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

// const obs$ = range(1,5);

// obs$.pipe(
//         map<number, string>( value => (value*10).toString() )
//     ).subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupbaseURI$ = keyup$.pipe(
    map(value => {
        console.log(value)
        return value;
    }),
    pluck('target', 'baseURI')
);

keyupbaseURI$.subscribe(observer);
