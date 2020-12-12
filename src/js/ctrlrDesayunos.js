'use strict'


let nombreDesayuno;
let tipoDesayuno;
let precioDesayuno;
let sUrlImg;
let contenedorGeneral = document.querySelector('#tarjetaDes');
let listaDesayunos = listarDesayunos();
mostrar_Desayunos();

function mostrar_Desayunos(){

    for(let i=0; i < listaDesayunos.length; i++){


        nombreDesayuno = listaDesayunos[i]['nombre'];
        tipoDesayuno = listaDesayunos[i]['tipo'];
        precioDesayuno = listaDesayunos[i]['precio'];
        sUrlImg = listaDesayunos[i]['imagen'];
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
        let imgDesayuno = document.createElement('img');
        imgDesayuno.classList.add('imagenCard');
        imgDesayuno.alt = 'Imagen del Producto';
        imgDesayuno.src = sUrlImg;
        divIzquierda.appendChild(imgDesayuno);

        //4. Creación del nombre de Desayuno
        let nombreDesayunos = document.createElement('h3');
        let nombre = document.createTextNode(nombreDesayuno);
        nombreDesayunos.classList.add('nombreDesayuno');
        nombreDesayunos.appendChild(nombre);
        divDerecha.appendChild(nombreDesayunos);
        //5. Creación del tipo
        let tipoDesayunos = document.createElement('p');
        let tipo = document.createTextNode(tipoDesayuno);
        tipoDesayunos.classList.add('tipoDesayuno');
        tipoDesayunos.appendChild(tipo);
        divDerecha.appendChild(tipoDesayunos);
        //5. Creación del precio
        let precioDesayunos = document.createElement('span');
        let precio = document.createTextNode("₡"+precioDesayuno+".00 i.v.i.");
        precioDesayunos.classList.add('precioDesayuno');
        precioDesayunos.appendChild(precio);
        divDerecha.appendChild(precioDesayunos);

        let botonOrdenar = document.createElement('button');
        let ordenar = document.createTextNode("Ordenar");
        botonOrdenar.classList.add('log');
        botonOrdenar.appendChild(ordenar);
        divDerecha.appendChild(botonOrdenar);

    }
};