import { from, Observer, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(observer);

interface Personaje{
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
];

const personajes$ = from(personajes);

personajes$.pipe(
    distinctUntilChanged( (previus,current) => previus.nombre===current.nombre)
).subscribe(observer);