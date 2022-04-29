// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } if (parametro1 === false && parametro2 === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  let concatena = arrayString[arrayString.length - 1] + ", " + arrayString[0];
  return concatena;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let posicaoInicial = arrayNumeros[0];
  let contador = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > posicaoInicial) {
      posicaoInicial = arrayNumeros[index];
    }
  }
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (posicaoInicial === arrayNumeros[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1;
  let gato2 = mouse - cat2;
  if (gato1 < 0) {
    gato1 *= (-1);
  }
  if (gato2 < 0) {
    gato2 *= (-1);
  }
  let resultado = '';
  if (gato1 < gato2) {
    resultado = 'cat1';
  } else if (gato1 === gato2) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      arrayNumeros[index] = 'fizzBuzz';
    } else if(arrayNumeros[index] % 5 === 0){
      arrayNumeros[index] = 'buzz';
    } else if (arrayNumeros[index] % 3 === 0){
      arrayNumeros[index] = 'fizz';
    } else{
      arrayNumeros[index] = 'bug!';
    }
  }
  return arrayNumeros;
}

// Desafio 9
function encode(string) {
  let arrayString = string.split("");
  for (let index = 0; index < arrayString.length; index += 1) {
    if (arrayString[index] === 'a') {
      arrayString[index] = 1;
    } else if (arrayString[index] === 'e') {
      arrayString[index] = 2;
    } else if (arrayString[index] === 'i') {
      arrayString[index] = 3;
    } else if (arrayString[index] === 'o') {
      arrayString[index] = 4;
    } else if (arrayString[index] === 'u') {
      arrayString[index] = 5;
    }
  }
  arrayString = arrayString.join(''); 
  return arrayString;
}

function decode(string) {
  let arrayString = string.split("");
  for (let index = 0; index < arrayString.length; index += 1) {
    if (arrayString[index] === '1') {
      arrayString[index] = 'a';
    } else if (arrayString[index] === '2') {
      arrayString[index] = 'e';
    } else if (arrayString[index] === '3') {
      arrayString[index] = 'i';
    } else if (arrayString[index] === '4') {
      arrayString[index] = 'o';
    } else if (arrayString[index] === '5') {
      arrayString[index] = 'u';
    }
  }
  arrayString = arrayString.join(''); 
  return arrayString;
}

// Desafio 10
function techList(array,name) {
  array.sort();
  let novoArray = [];
  if (array.length > 0) {
    for (let valor in array) {
      let objeto = {
        tech: array[valor],
        name: name,
      }
      for (let posicao in array) {
        if (posicao === valor) {
          posicao = novoArray.push(objeto);
        }
      }
    } 
  } else {
    novoArray.join('');
    novoArray = 'Vazio!';
  }
  return novoArray;
}

// Desafio 11
function numeroRepetido(array) {
  let numeros = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }

  for (let index of array) {
    numeros[index] = numeros[index] + 1;
  }
  for (let index = 0; index <= 9; index += 1 ) {
    if (numeros[index] >= 3) {
      return false;
    }
  }
  return true;
}

function verificaArray(array) {
  let verificaArray = array;
  if (array.length !== 11){
    verificaArray = 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 | array[index] > 9 | numeroRepetido(array) === false) {
        verificaArray = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return verificaArray;
}

function generatePhoneNumber(array) {
  let arrayTelefone = '';
  if (verificaArray(array) === array) {
    let arrayDDD = array.slice(0,2);
    arrayDDD = arrayDDD.join('');
    let arrayPrimeiraParte = array.slice(2,7);
    arrayPrimeiraParte = arrayPrimeiraParte.join('');
    let arraySegundaParte = array.slice(7,11);
    arraySegundaParte = arraySegundaParte.join('');
    arrayTelefone = '(' + arrayDDD + ')' + ' ' + arrayPrimeiraParte + '-' + arraySegundaParte;
  } else {
    arrayTelefone = verificaArray(array);
  }
  return arrayTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let possibilidadeLadoAB = lineA + lineB;
  let moduloPossibilidadeLadoAB = Math.abs(lineA - lineB);
  let possibilidadeLadoAC = lineA + lineC;
  let moduloPossibilidadeLadoAC = Math.abs(lineA - lineC);
  let possibilidadeLadoBC = lineB + lineC;
  let moduloPossibilidadeLadoBC = Math.abs(lineB - lineC);
  let resultado = false;
  if (lineA < possibilidadeLadoBC && lineA > moduloPossibilidadeLadoBC) {
    resultado = true;
  } else if (lineB < possibilidadeLadoAC && lineB > moduloPossibilidadeLadoAC) {
    resultado = true;
  } else if (lineC < possibilidadeLadoAB && lineC > moduloPossibilidadeLadoAB) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 13
function contaCoposCerveja(string) {
  let arrayString = string.split('');
  let somaCoposCerveja = 0;
  for (let index = 0; index < arrayString.length; index += 1) {
    for (let numero = 1; numero <= 9; numero += 1) {
      if (parseInt(arrayString[index]) == numero)
      somaCoposCerveja += parseInt(arrayString[index]);
    }
  }
  return somaCoposCerveja;
}

function hydrate(string) {
  let coposCerveja = contaCoposCerveja(string);
  let stringCoposAgua = '';
  if (coposCerveja === 1) {
    stringCoposAgua = coposCerveja + " " + 'copo de água';
  } else {
    stringCoposAgua = coposCerveja + " " + 'copos de água';
  }
  return stringCoposAgua;
}
