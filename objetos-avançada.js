// Crie o objeto pessoa com as propriedades especificadas
let pessoa = {
    nome: "Miguel",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
      rua: "Rua das dores, 200",
      cidade: "São Paulo",
      estado: "SP"
    },
    // Adicione o método apresentacao ao objeto pessoa
    apresentacao: function() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
  };
  
  // Acesse e exiba o valor da propriedade cidade do endereco no console
  console.log("Cidade do endereço:", pessoa.endereco.cidade);
  
  // Atualize a propriedade profissao para um novo valor e exiba o objeto atualizado no console
  pessoa.profissao = "Gerente de Projeto";
  console.log("Objeto pessoa atualizado (com nova profissão):", pessoa);
  
  // Adicione uma nova propriedade telefone ao objeto pessoa e exiba o objeto atualizado no console
  pessoa.telefone = "(11) 1234-5678";
  console.log("Objeto pessoa atualizado (com telefone):", pessoa);