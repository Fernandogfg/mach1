import soma from "./modules/calculadora.mjs";
import { subtracao, multiplicacao } from "./modules/calculadora.mjs";
import { divisao as divide } from "./modules/calculadora.mjs";
import { calcular } from "./modules/calculos/juros.mjs";
import { calcular as calculaMulta } from "./modules/calculos/multa.mjs";
console.log(soma(1, 2));

console.log(subtracao(2, 1));
console.log(multiplicacao(2, 1));
console.log(divide(6, 2));
console.log(calcular(0, 0));
console.log(calculaMulta(0, 0));
