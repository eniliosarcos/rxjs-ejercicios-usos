import { Observer, of } from "rxjs";
import { take, tap } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
.subscribe(observer)