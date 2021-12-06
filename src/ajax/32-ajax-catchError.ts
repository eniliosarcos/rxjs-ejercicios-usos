import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const atrapaError = (err: AjaxError) => {
    console.warn('error en : ', err.message)
    return of([]);
}

// const manejaErrores =(response: Response) => {

//     if(!response.ok){
//         throw new Error(response.statusText);
//     }

//     return response;
// }

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp  => resp.json())
//     .then(data => console.log('data', data))
//     .catch(error => console.warn('Error en usuarios', error))

// fetchPromesa
//     .then(manejaErrores)
//     .then( resp  => resp.json())
//     .then(data => console.log('data', data))
//     .catch(error => console.warn('Error en usuarios', error))

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
)
.subscribe(users => console.log('usuarios: ', users));