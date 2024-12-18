function iguales(a,b){                                                  //funcion que determina si el numero de filas de la matriz A es igual al numero de columnas de la matriz B
    tamaño = a[0].length;                                               //la variable tamaño almacena el numero de columnas de la matriz A
    for (let i = 0; i < a.length; i++) {                                //este ciclo confirma si el numero de columnas y filas de la matriz A es igual
        if (a[i].length != tamaño) {                                    //se compara columna por columna para verificar que sean del mismo tamaño
            return false;                                               //si no se cumple se retorna falso
        } 
    }
    if (tamaño == b.length) 
        return true                                                     //si el numero de filas de la matriz A no es igual al numero de columnas de la matriz B se toma como falso
    else 
        return false                                                    //si coinciden se retorna verdadero
}


function multiply(matrizA,matrizB){                                     //funcion que multiplicara las matrices
    if (iguales(matrizA,matrizB)) {                                     //si las filas y columnas de las matrices coinciden, procedemos a multiplicar
        let suma = 0;                                                   //suma es la variable donde se almacenaran los resultados de las operaciones
        const matrizC = pivote(matrizB.length-1);                       //creamos una matriz vacia para guardar los resultados por medio de la funcion pivote
        for (let i = 0; i < matrizC.length; i++) {                      //ciclo que recorre las filas de la matriz resultante
            for (let j = 0; j < matrizC.length; j++) {                  //ciclo que recorre las columnas de la matriz resultante
                suma = 0;                                               //cada vez que se inserta un dato, suma se reinicia a 0 para realizar la siguiente operacion
                for (let k = 0; k < matrizA[i].length; k++) {           //ciclo que agrupara los datos a operar
                suma += matrizA[i][k] * matrizB[k][j];                  //realizacion de la operacion de las filas y columnas
                }
                matrizC[i][j] = suma;                                   //se guarda el dato final en la posicion respectiva de la matriz resultante
            }
        }
        return matrizC;                                                 //se retorna la matriz resultante
    } else {
        return "error";                                                 //si las matrices A y B no cumplen los requisitos, se devuelve un error
    }
}

function pivote(n) {                                                    //creacion de la matriz resultante vacia
    const r = [];
    for (let i = 0; i < n; i++) {
        r[i] = [];
        for (let j = 0; j < n; j++) {
            r[i][j] = null;
        }
    }
    return r;
}


const A = [[1,2,3],[4,5,6]];                                            //delacarion de la matria A
const B = [[7,8],[9,10],[11,12]];                                       //declaracion de la matriz B


console.log(multiply(A,B))                                              //ejecucion de la multiplicacion



