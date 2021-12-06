import { interval, Observer } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

interval(500).pipe(
    take(7),
    tap(console.log),
    reduce(totalReducer, 0)
).subscribe(observer);