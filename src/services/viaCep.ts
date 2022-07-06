export const testList = [
    {
    "cep": "91420-270",
    "logradouro": "Rua São Domingos",
    "complemento": "",
    "bairro": "Bom Jesus",
    "localidade": "Porto Alegre",
    "uf": "RS",
    "ibge": "4314902",
    "gia": "",
    "ddd": "51",
    "siafi": "8801"
  },
  {
    "cep": "91040-000",
    "logradouro": "Rua Domingos Rubbo",
    "complemento": "",
    "bairro": "Cristo Redentor",
    "localidade": "Porto Alegre",
    "uf": "RS",
    "ibge": "4314902",
    "gia": "",
    "ddd": "51",
    "siafi": "8801"
  },
  {
    "cep": "91040-320",
    "logradouro": "Rua Domingos Martins",
    "complemento": "",
    "bairro": "Cristo Redentor",
    "localidade": "Porto Alegre",
    "uf": "RS",
    "ibge": "4314902",
    "gia": "",
    "ddd": "51",
    "siafi": "8801"
  },
  {
    "cep": "91910-450",
    "logradouro": "Rua Domingos da Silva",
    "complemento": "",
    "bairro": "Camaquã",
    "localidade": "Porto Alegre",
    "uf": "RS",
    "ibge": "4314902",
    "gia": "",
    "ddd": "51",
    "siafi": "8801"
  },
]

export async function searchCep(cep: string) {
  let url = `https://viacep.com.br/ws/${cep}/json/`
  let result = [];
  await fetch(url)
      .then((response) => response.json())
      .then((json) => result = json)
      .catch((error) => result = []);
  //console.log(result);
  return result;
}