import { interval, Observer, timer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); //sumandole 5 segundos a la fecha

// const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000,1000);
const timer$ = timer(hoyEn5);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');


