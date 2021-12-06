import { Observer, of } from 'rxjs';

// const observable$ = of(1,2,3,4,5,6);
const observable$ = of(...[1,2,3,4,5,6],2,3,4,5);
// const observable$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));


const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

console.log('inicio del observable sincrono')
observable$.subscribe(observer)
console.log('fin del observable sincrono')