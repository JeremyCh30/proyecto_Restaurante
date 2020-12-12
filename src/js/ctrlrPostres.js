'use strict'


let nombrePostre;
let tipoPostre;
let precioPostre;
let sUrlImg;
let contenedorGeneral = document.querySelector('#tarjetaPost');
let listaPostres = listarPostres();
mostrar_Postres();

function mostrar_Postres(){

    for(let i=0; i < listaPostres.length; i++){


        nombrePostre = listaPostres[i]['nombre'];
        tipoPostre = listaPostres[i]['tipo'];
        precioPostre = listaPostres[i]['precio'];
        sUrlImg = listaPostres[i]['imagen'];
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
        let imgPostre = document.createElement('img');
        imgPostre.classList.add('imagenCard');
        imgPostre.alt = 'Imagen del Producto';
        imgPostre.src = sUrlImg;
        divIzquierda.appendChild(imgPostre);

        //4. Creación del nombre de Postre
        let nombrePostres = document.createElement('h3');
        let nombre = document.createTextNode(nombrePostre);
        nombrePostres.classList.add('nombrePostre');
        nombrePostres.appendChild(nombre);
        divDerecha.appendChild(nombrePostres);
        //5. Creación del tipo
        let tipoPostres = document.createElement('p');
        let tipo = document.createTextNode(tipoPostre);
        tipoPostres.classList.add('tipoPostre');
        tipoPostres.appendChild(tipo);
        divDerecha.appendChild(tipoPostres);
        //5. Creación del precio
        let precioPostres = document.createElement('span');
        let precio = document.createTextNode("₡"+precioPostre+".00 i.v.i.");
        precioPostres.classList.add('precioPostre');
        precioPostres.appendChild(precio);
        divDerecha.appendChild(precioPostres);

        let botonOrdenar = document.createElement('button');
        let ordenar = document.createTextNode("Ordenar");
        botonOrdenar.classList.add('log');
        botonOrdenar.appendChild(ordenar);
        divDerecha.appendChild(botonOrdenar);

    }
};