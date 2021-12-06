import { range } from 'rxjs';

const src$ = range(1,5);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');

// const observer: Observer<any> = {
//     next: value => console.log('next [observer]:', value),
//     error: error => console.warn('error [observer]:', error),
//     complete: () => console.info('completado [observer]')
// };
