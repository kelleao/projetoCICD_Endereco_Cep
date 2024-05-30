const axios = require("axios");

const Validar_CEP = (cep) => {
  const myRe = /^[0-9]{5}-[0-9]{3}$/;
  return myRe.test(cep);
};

const getEnderecoCep = async (cep) => {
 
    if (!Validar_CEP(cep)) {
      throw new Error("Inválido CEP!");
    } 
      const responde = await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      return responde.data;
  }
 
module.exports = { Validar_CEP, getEnderecoCep };
