import { from, Observer, range } from 'rxjs';
import { filter } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

// const obs$ = range(1,10);

// const obsImpar$ = obs$.pipe(
//      filter( value => value % 2===1)
// );

// obs$.subscribe(observer);
// obsImpar$.subscribe(observer);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
    {
        tipo: 'heroe',
        nombre: 'superman'
    },
];

const obs$ = from(personajes);

const obsHeroe$ = obs$.pipe(
     filter( value => value.tipo === 'heroe')
);

obs$.subscribe(observer);
obsHeroe$.subscribe(observer);