'use strict'


let nombreBebida;
let tipoBebida;
let precioBebida;
let sUrlImg;
let contenedorGeneral = document.querySelector('#tarjetaBeb');
let listaBebidas = listarBebidas();
mostrar_bebidas();

function mostrar_bebidas(){

    for(let i=0; i < listaBebidas.length; i++){


        nombreBebida = listaBebidas[i]['nombre'];
        tipoBebida = listaBebidas[i]['tipo'];
        precioBebida = listaBebidas[i]['precio'];
        sUrlImg = listaBebidas[i]['imagen'];
        console.log(sUrlImg);

        //1. creación del card para el producto 
        let divProduct = document.createElement('div');
        divProduct.classList.add('card');
        contenedorGeneral.appendChild(divProduct);

        //2. creacion los divs para imagen(izquierda) y contenido(derecha)
        let divIzquierda = document.createElement('div');
        divIzquierda.classList.add('izquierda');
        divProduct.appendChild(divIzquierda);

        let divDerecha = document.createElement('div');
        divDerecha.classList.add('derecha');
        divProduct.appendChild(divDerecha);

        //3. Creación de la imagen
        let imgBebida = document.createElement('img');
        imgBebida.classList.add('imagenCard');
        imgBebida.alt = 'Imagen del Producto';
        imgBebida.src = sUrlImg;
        divIzquierda.appendChild(imgBebida);

        //4. Creación del nombre de bebida
        let nombreBebidas = document.createElement('h3');
        let nombre = document.createTextNode(nombreBebida);
        nombreBebidas.classList.add('nombreBebida');
        nombreBebidas.appendChild(nombre);
        divDerecha.appendChild(nombreBebidas);
        //5. Creación del tipo
        let tipoBebidas = document.createElement('p');
        let tipo = document.createTextNode(tipoBebida);
        tipoBebidas.classList.add('tipoBebida');
        tipoBebidas.appendChild(tipo);
        divDerecha.appendChild(tipoBebidas);
        //5. Creación del precio
        let precioBebidas = document.createElement('span');
        let precio = document.createTextNode("₡"+precioBebida+".00 i.v.i.");
        precioBebidas.classList.add('precioBebida');
        precioBebidas.appendChild(precio);
        divDerecha.appendChild(precioBebidas);

        let botonOrdenar = document.createElement('button');
        let ordenar = document.createTextNode("Ordenar");
        botonOrdenar.classList.add('log');
        botonOrdenar.appendChild(ordenar);
        divDerecha.appendChild(botonOrdenar);

    }
};