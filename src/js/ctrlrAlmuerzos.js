'use strict'


let nombreAlmuerzo;
let tipoAlmuerzo;
let precioAlmuerzo;
let sUrlImg;
let contenedorGeneral = document.querySelector('#tarjetaAlm');
let listaAlmuerzo = listarAlmuerzos();
mostrar_Almuerzo();

function mostrar_Almuerzo(){

    for(let i=0; i < listaAlmuerzo.length; i++){


        nombreAlmuerzo = listaAlmuerzo[i]['nombre'];
        tipoAlmuerzo = listaAlmuerzo[i]['tipo'];
        precioAlmuerzo = listaAlmuerzo[i]['precio'];
        sUrlImg = listaAlmuerzo[i]['imagen'];

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
        let imgAlmuerzo = document.createElement('img');
        imgAlmuerzo.classList.add('imagenCard');
        imgAlmuerzo.alt = 'Imagen del Producto';
        imgAlmuerzo.src = sUrlImg;
        divIzquierda.appendChild(imgAlmuerzo);

        //4. Creación del nombre de Almuerzo
        let nombreAlmuerzos = document.createElement('h3');
        let nombre = document.createTextNode(nombreAlmuerzo);
        nombreAlmuerzos.classList.add('nombreAlmuerzo');
        nombreAlmuerzos.appendChild(nombre);
        divDerecha.appendChild(nombreAlmuerzos);
        //5. Creación del tipo
        let tipoAlmuerzos = document.createElement('p');
        let tipo = document.createTextNode(tipoAlmuerzo);
        tipoAlmuerzos.classList.add('tipoAlmuerzo');
        tipoAlmuerzos.appendChild(tipo);
        divDerecha.appendChild(tipoAlmuerzos);
        //5. Creación del precio
        let precioAlmuerzos = document.createElement('span');
        let precio = document.createTextNode("₡"+precioAlmuerzo+".00 i.v.i.");
        precioAlmuerzos.classList.add('precioAlmuerzo');
        precioAlmuerzos.appendChild(precio);
        divDerecha.appendChild(precioAlmuerzos);

        let botonOrdenar = document.createElement('button');
        let ordenar = document.createTextNode("Ordenar");
        botonOrdenar.classList.add('log');
        botonOrdenar.appendChild(ordenar);
        divDerecha.appendChild(botonOrdenar);

    }
};