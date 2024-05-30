const { getEnderecoCep } = require("../src/cep");

describe("Teste o número do CEP", () => {
  test("Válida CEP", async () => {
    const data = await getEnderecoCep("31515-220");
    expect(data).toHaveProperty("cep", "31515-220");
    expect(data).toHaveProperty("logradouro", "Rua José Sanguinete");
    expect(data).toHaveProperty("complemento", "");
    expect(data).toHaveProperty("bairro", "São João Batista (Venda Nova)");
    expect(data).toHaveProperty("localidade", "Belo Horizonte");
    expect(data).toHaveProperty("uf", "MG");
    expect(data).toHaveProperty("ibge", "3106200");
    expect(data).toHaveProperty("ddd", "31");
  });

  test("CEP inválido", async () => {
    await expect(getEnderecoCep("31515220")).rejects.toThrow("Inválido");
  });
});
