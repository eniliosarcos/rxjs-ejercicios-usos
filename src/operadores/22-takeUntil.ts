import { fromEvent, interval, Observer } from "rxjs";
import {map, takeUntil } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<PointerEvent>(button, 'click');

counter$.pipe(
    takeUntil(clickBtn$) //emite el interval hasta que el boton es presionado
)
.subscribe(observer);