import { fetchData, fetchDataPromise } from "../src/asyncFunctions.js";
import { expect } from "chai";

describe("Funcao fetchData com callback", () => {
  it("deve retornar 'dados recebidos' via callback", (done) => {
    fetchData((resultado) => {
      expect(resultado).to.equal("dados recebidos");
      done();
    });
  });

  it("deve retornar 'dados recebidos' via promise", () => {
    return fetchDataPromise().then((resultado) => {
      expect(resultado).to.equal("dados recebidos");
    });
  });

  it("deve retornar 'dados recebidos' via promise", async () => {
    const resultado = await fetchDataPromise();
    expect(resultado).to.equal("dados recebidos");
  });
});
