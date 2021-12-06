import { fromEvent } from 'rxjs';

//eventos del DOM
const src1$ = fromEvent<MouseEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');


src1$.subscribe(({x,y}) => {
    console.log('x ',x, 'y ',y); 
});

src2$.subscribe(evento => {
    console.log(evento.key)
});