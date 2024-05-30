const { Validar_CEP } = require("../src/cep");

describe("Teste entre válido e inválido do CEP", () => {
  test("Válido CEP", () => {
    expect(Validar_CEP("31515-220")).toBe(true);
  });

  test("Inválido CEP", () => {
    expect(Validar_CEP("31515")).toBe(false);
  });
});
