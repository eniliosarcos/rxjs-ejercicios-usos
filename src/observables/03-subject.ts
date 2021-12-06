
import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const intervalo$ = new Observable<number>(subscriber => {

    const intervalID = setInterval(()=> {
        subscriber.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalID)
        console.log('clear interval')
    };
});

/*
1- casteo multiple
2- tambien es un observer
3- next, error y complete
*/

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);
// const subscription2 = intervalo$.subscribe(random => console.log('subs2 : ', random));
// const subscription1 = intervalo$.subscribe(random => console.log('subs1 : ', random));


const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);