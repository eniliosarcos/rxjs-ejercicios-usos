import { of, startWith } from "rxjs";


const numeros$ = of(1,2,3);

numeros$.pipe(
    startWith(0)
)
.subscribe(console.log);