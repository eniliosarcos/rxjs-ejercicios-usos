
import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

// const observable$ = Observable.create();
const observable$ = new Observable<string>( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    
    //forzar un error
    // const a = undefined;
    // a.nombre = 'enilio';

    subscriber.complete(); // el observable puede seguir recibiendo valor
    // pero ya no lo emitira mas a los subscriptores

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

//DEPRECADO
// observable$.subscribe(
//     valor => console.log('Next: ',valor),
//     error => console.warn('error: ', error),
//     () => console.info('completado')
//     );

observable$.subscribe(observer);






