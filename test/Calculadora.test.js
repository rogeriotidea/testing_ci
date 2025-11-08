import soma from "../src/Calculadora.js";
import { expect } from "chai";

describe("Funcao soma", function () {
  it("Deve retornar 4 quando somar 2 e 2", function () {
    const resultado = soma(2, 2);
    expect(resultado).to.equal(4);
  });

  it("deve retornar a soma correta de numeros negativos", function () {
    const resultado = soma(-3, -6);
    expect(resultado).to.equal(-9);
  });
});
