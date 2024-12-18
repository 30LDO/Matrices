function pivote(n) {                                                        //funcion que crea una matriz vacia donde se guardara la matriz resultante
    const r = [];                                                           //declaracion del arreglo vacio
    for (let i = 0; i < n; i++) {                                           //ciclo que creara n filas y n columnas
        r[i] = [];                                                          //creacion de las columnas
        for (let j = 0; j < n; j++) {                                       //ciclo para rellenar las casillas
            r[i][j] = null;                                                 //las casillas se igualan a nulll
        }
    }
    return r;                                                               //una vez creada la matriz vacia, se devuelve
}

function rotar(matriz){                                                     //funcion que rotara la matriz
    reversa = matriz.length-1;                                              //contador ultilizado para ir de la columna mas a la derecha hasta la columna mas a la izquierda
    const resultado = pivote(matriz.length);                                //con la funcion pivote creamos la matriz vacia resultado
    for (let fila = 0; fila < matriz.length; fila++) {                      //recorre las filas
        for (let columna = 0; columna < matriz[fila].length; columna++) {   //recorre las columnas
           resultado[columna][reversa] = matriz[fila][columna];             //insertamos el dato en la posicion deseada de la matriz resultante
        }
        reversa--;                                                          //al terminar el ciclo, pasamos a la siguiente columna
    }
    return (resultado);                                                     //returna la matriz resultante
}

const input = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];             //matriz a rotar

console.log(rotar(input))                                                   //despliega la matriz rotada

