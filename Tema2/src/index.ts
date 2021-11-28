import * as _ from 'lodash';

function componente(){
    const elemento = document.createElement('div');
    //Lodash
    elemento.innerHTML = _.join(['Hola!', 'Webpack'],' ');
    return elemento;
}

document.body.appendChild(componente())