'use strict'


let nombreCena;
let tipoCena;
let precioCena;
let sUrlImg;
let contenedorGeneral = document.querySelector('#tarjetaCen');
let listaCenas = listarCenas();
mostrar_Cenas();

function mostrar_Cenas(){

    for(let i=0; i < listaCenas.length; i++){


        nombreCena = listaCenas[i]['nombre'];
        tipoCena = listaCenas[i]['tipo'];
        precioCena = listaCenas[i]['precio'];
        sUrlImg = listaCenas[i]['imagen'];
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
        let imgCena = document.createElement('img');
        imgCena.classList.add('imagenCard');
        imgCena.alt = 'Imagen del Producto';
        imgCena.src = sUrlImg;
        divIzquierda.appendChild(imgCena);

        //4. Creación del nombre de Cena
        let nombreCenas = document.createElement('h3');
        let nombre = document.createTextNode(nombreCena);
        nombreCenas.classList.add('nombreCena');
        nombreCenas.appendChild(nombre);
        divDerecha.appendChild(nombreCenas);
        //5. Creación del tipo
        let tipoCenas = document.createElement('p');
        let tipo = document.createTextNode(tipoCena);
        tipoCenas.classList.add('tipoCena');
        tipoCenas.appendChild(tipo);
        divDerecha.appendChild(tipoCenas);
        //5. Creación del precio
        let precioCenas = document.createElement('span');
        let precio = document.createTextNode("₡"+precioCena+".00 i.v.i.");
        precioCenas.classList.add('precioCena');
        precioCenas.appendChild(precio);
        divDerecha.appendChild(precioCenas);

        let botonOrdenar = document.createElement('button');
        let ordenar = document.createTextNode("Ordenar");
        botonOrdenar.classList.add('log');
        botonOrdenar.appendChild(ordenar);
        divDerecha.appendChild(botonOrdenar);

    }
};