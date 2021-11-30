let Agregar = document.querySelector('.Agregar');
let Eliminar = document.querySelector('.Eliminar');

var c = 0;
var cont = 0;
var maximoNumeroDeFilas = 10;

function contador(){
    c = document.getElementById("tbody").rows.length;
    c+1;
    return c;
};

Agregar.addEventListener('click', function agre(){
    cont= document.getElementById("tbody").rows.length;
    if(cont >= maximoNumeroDeFilas){
        alert('No se pueden crear mas registros');
    }
    else{ 
        cont++;
        let peliculas = prompt("Pelicula:");
        let calificacion = prompt("Calificacion:");
        let urlimg = prompt("URL de imagen:");

        var tbodyRef = document.getElementById('tablepeli').getElementsByTagName('tbody')[0];
        var fila = tbodyRef.insertRow();
        var columna = fila.insertCell();
        var dato1 = document.createTextNode(contador());
        columna.appendChild(dato1);

        var celda = fila.insertCell(-1);
        var dato2 = document.createTextNode(peliculas);
        celda.appendChild(dato2);

        var celda2 = fila.insertCell(-1);
        var dato3 = document.createTextNode(calificacion);
        celda2.appendChild(dato3);

        var conteinertxt = document.querySelector('.texto');
        var titulo = document.createTextNode('txt');
        titulo.className='titulos';
        titulo.textContent=peliculas;
    
        conteinertxt.appendChild(titulo);

        var conteinerimg = document.querySelector('.almacenamiento');
        var imagenfondo = document.createElement('img');
        imagenfondo.className='propiedadesimg';
        imagenfondo.src=urlimg;
        
        conteinerimg.appendChild(imagenfondo);
    }
});

Eliminar.addEventListener('click', function eli(){
    let conteinerimg = document.querySelector('.almacenamiento');
    let ultimo = conteinerimg.lastChild;
    conteinerimg.removeChild(ultimo);

    let conteinertxt = document.querySelector('.texto');
    let textultimo = conteinertxt.lastChild;
    conteinertxt.removeChild(textultimo);

    document.getElementById("tbody").deleteRow(-1);
});

/*
//var img1 = new image();
//var src1 =

let cambiarimg = document.querySelector('cont3');

cambiarimg.addEventListener('onMouseOut', cambiarimg);
function cambiar(){
    
}*/
function visible(){
    var x = document.querySelector('.propiedadesimg');
    var y = document.querySelector('.propiedadesimg2');
    var z = document.querySelector('.propiedadesimg3');
    var xx = document.querySelector('.propiedadesimg4');
    var yy = document.querySelector('.propiedadesimg5');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    }
    y.style.visibility = 'hidden';
    z.style.visibility = 'hidden';
    xx.style.visibility = 'hidden';
    yy.style.visibility = 'hidden';
}

function visible2(){
    var x = document.querySelector('.propiedadesimg');
    var y = document.querySelector('.propiedadesimg2');
    var z = document.querySelector('.propiedadesimg3');
    var xx = document.querySelector('.propiedadesimg4');
    var yy = document.querySelector('.propiedadesimg5');
    if (y.style.visibility === 'hidden') {
        y.style.visibility = 'visible';
      }
      x.style.visibility = 'hidden';
      z.style.visibility = 'hidden';
      xx.style.visibility = 'hidden';
      yy.style.visibility = 'hidden';
}

function visible3(){
    var x = document.querySelector('.propiedadesimg');
    var y = document.querySelector('.propiedadesimg2');
    var z = document.querySelector('.propiedadesimg3');
    var xx = document.querySelector('.propiedadesimg4');
    var yy = document.querySelector('.propiedadesimg5');
    if (z.style.visibility === 'hidden') {
        z.style.visibility = 'visible';
      }
      x.style.visibility = 'hidden';
      y.style.visibility = 'hidden';
      xx.style.visibility = 'hidden';
      yy.style.visibility = 'hidden';
}

function visible4(){
    var x = document.querySelector('.propiedadesimg');
    var y = document.querySelector('.propiedadesimg2');
    var z = document.querySelector('.propiedadesimg3');
    var xx = document.querySelector('.propiedadesimg4');
    var yy = document.querySelector('.propiedadesimg5');
    if (xx.style.visibility === 'hidden') {
        xx.style.visibility = 'visible';
      }
      x.style.visibility = 'hidden';
      y.style.visibility = 'hidden';
      z.style.visibility = 'hidden';
      yy.style.visibility = 'hidden';
}

function visible5(){
    var x = document.querySelector('.propiedadesimg');
    var y = document.querySelector('.propiedadesimg2');
    var z = document.querySelector('.propiedadesimg3');
    var xx = document.querySelector('.propiedadesimg4');
    var yy = document.querySelector('.propiedadesimg5');
    if (yy.style.visibility === 'hidden') {
        yy.style.visibility = 'visible';
      }
      x.style.visibility = 'hidden';
      y.style.visibility = 'hidden';
      z.style.visibility = 'hidden';
      xx.style.visibility = 'hidden';
}

