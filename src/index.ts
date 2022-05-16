let contador: number;
let multiploDos: number;
let multiploTres: number;

for (contador = 1; contador <= 100; contador++) {
  if (contador % 2 === 0) {
    multiploDos = contador;
    console.log(multiploDos + " es multiplo de 2");
  } else if (contador % 3 === 0) {
    multiploTres = contador;
    console.log(multiploTres + " es multiplo de 3");
  }
}
