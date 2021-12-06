import { from, interval, Observer } from "rxjs";
import { scan, take, tap, map } from "rxjs/operators";


const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

// const totalScan = (acumulador: number, valorActual: number) => {
//     return acumulador + valorActual;
// }

// interval(500).pipe(
//     take(7),
//     tap(console.log),
//     scan(totalScan, 0)
// ).subscribe(observer);

//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'eni', autenticado: false, token: null},
    {id: 'eni', autenticado: true, token: 'ABC'},
    {id: 'eni', autenticado: true, token: '123'},
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc:any, cur:any) => {

        return {...acc, ...cur}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map( state => state.id)
)

id$.subscribe(observer);