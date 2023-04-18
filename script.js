const eixo = document.querySelector('.eixo');

let horizontal = 47;
let vertical = 55;
var pixel = 6;

eixo.style = `transform: rotateX(${vertical}deg) rotateY(${horizontal}deg) rotateZ(0deg);`

function control(val) {
    switch (val) {
        case 'up':
            //alert(val)
            vertical += pixel
            break;
        case 'left':
            //alert(val)
            horizontal -= pixel
            break;
        case 'down':
            //alert(val)
            vertical += pixel
            break;
        case 'right':
            //alert(val)
            horizontal -= pixel
            break;
    }
}