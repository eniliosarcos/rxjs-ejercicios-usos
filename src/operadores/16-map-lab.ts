import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor magna purus, et cursus est sollicitudin eget. Proin ut orci malesuada, rutrum erat varius, pulvinar neque. Curabitur vehicula varius dolor vel vestibulum. Phasellus et odio dolor. Praesent auctor pharetra ligula sit amet rhoncus. Aenean bibendum vulputate tincidunt. Nulla commodo turpis nunc, at euismod enim molestie id. Curabitur dapibus est a augue vehicula sollicitudin. Quisque ultricies neque vel lectus tempus, et tincidunt tellus porttitor. Nunc aliquet tincidunt magna sit amet malesuada. Aenean quis nulla ac massa commodo placerat. Proin ut risus dolor. Nulla pharetra hendrerit ornare. Aliquam mollis sed velit eget hendrerit. Suspendisse potenti.
<br/><br/>
Morbi porta mattis dui tristique elementum. Etiam porttitor nisi a mattis mollis. Sed ac gravida libero. Nunc quis sollicitudin ex. Maecenas interdum, purus gravida finibus laoreet, quam nunc ullamcorper velit, sed egestas est mi non justo. Sed ultricies nunc id auctor tristique. Sed sed porta dui. Quisque imperdiet ac nulla at aliquam. Aliquam ut sapien et orci euismod tristique id ut leo. Quisque eget lectus non nunc varius volutpat vel id lacus. Nullam nunc mi, rutrum eu est et, placerat sodales mi. Vestibulum elit magna, volutpat sed egestas a, tempus et erat. Vivamus condimentum, ex quis posuere pretium, erat dui molestie lorem, id euismod odio libero quis neque.
<br/><br/>
Pellentesque a sagittis urna. Phasellus ultrices, libero in aliquam facilisis, massa nisl euismod eros, non elementum nibh leo consequat nisi. Maecenas sagittis massa nulla, id suscipit ante porttitor in. Mauris vestibulum neque sit amet fermentum aliquam. Curabitur sed consectetur turpis, sit amet vehicula eros. Donec ut rutrum magna. Proin mattis blandit felis, quis laoreet lorem facilisis vitae. Quisque dictum egestas mi. Nam in dictum elit, quis feugiat erat.
<br/><br/>
Etiam eget maximus nulla, in aliquet diam. Nullam at quam a arcu pellentesque consequat. Vivamus vulputate fringilla orci, in venenatis nibh. Donec tincidunt venenatis facilisis. Nulla elit diam, sagittis in accumsan at, fringilla eget ipsum. Nulla facilisi. Duis dictum diam vitae mi lobortis blandit. Nunc et maximus augue, in faucibus lorem. Mauris malesuada, erat in condimentum viverra, justo elit suscipit lorem, vel tincidunt lorem tortor vel est. Nulla sed nunc libero. Morbi dui turpis, euismod in lacus in, blandit lobortis lorem.
<br/><br/>
Nunc faucibus blandit mollis. Donec consectetur ipsum vel posuere pharetra. Nulla pretium, nibh efficitur facilisis bibendum, nulla tortor pellentesque risus, non accumsan ipsum purus sed lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ornare vehicula quam vel ornare. Fusce vestibulum bibendum lobortis. Suspendisse vestibulum semper facilisis. Nam viverra at nisi sit amet aliquam. Duis in venenatis eros. Sed sed ex risus.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {

    const {
        clientHeight,
        scrollHeight,
        scrollTop
    } = event.target.documentElement;

    // console.log({
    //     clientHeight,
    //     scrollHeight,
    //     scrollTop
    // })

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
//streamss
const scroll$ = fromEvent(document,'scroll');

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})