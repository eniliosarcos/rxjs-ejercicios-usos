
import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const intervalo$ = new Observable<number>( subscriber => {

    let count:number = 1;

    const interval = setInterval(()=>{
        subscriber.next(count++);
        console.log('el contador continua...');
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subscription1 = intervalo$.subscribe( observer);
const subscription2 = intervalo$.subscribe( observer);
const subscription3 = intervalo$.subscribe( observer);

subscription1.add(subscription2);
subscription1.add(subscription3); //add sirve para encadenar subscribes

setTimeout(() => {
    subscription1.unsubscribe()
    console.log('completado timeout')
}, 5000);
