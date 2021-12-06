import { Observer, asyncScheduler } from 'rxjs';

// const observer: Observer<any> = {
//     next: value => console.log('next [observer]:', value),
//     error: error => console.warn('error [observer]:', error),
//     complete: () => console.info('completado [observer]')
// };


// const saludar = () => console.log('hola mundo');
// const saludar2 = nombre => console.log(`hola ${nombre}`);
// const saludar3 = (nombre,apellido) => console.log(`hola ${nombre} ${apellido}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'enilio');
// asyncScheduler.schedule(saludar3.bind(this, 'enilio', 'sarcos'), 2000);

const subs = asyncScheduler.schedule( function(state){

    console.log('state', state);

    this.schedule(state+1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);


asyncScheduler.schedule(() => subs.unsubscribe(),6000);