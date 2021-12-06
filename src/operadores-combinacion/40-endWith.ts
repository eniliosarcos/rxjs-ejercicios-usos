import { endWith, of } from "rxjs";


const numeros$ = of(1,2,3);

numeros$.pipe(
    endWith(0)
)
.subscribe(console.log);