import { catchError, Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const observer: Observer<any> = {
    next: value => console.log('next [observer]:', value),
    error: error => console.warn('error [observer]:', error),
    complete: () => console.info('completado [observer]')
};

const url = 'https://httpbin.orgD/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('Error :', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaEror)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaEror)
// );



const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs2$.subscribe(data => console.log('ajax :', data));
obs$.pipe(
    catchError(manejaError)
)
.subscribe(observer);