# API de Produtos Veganos

Bem-vindo à minha API de Produtos Veganos! Esta API foi desenvolvida para gerenciar produtos veganos, permitindo que os usuários adicionem, consultem, editem e excluam produtos de maneira simples. O projeto foi feito como requisito da matéria de **Desenvolvimento de API REST** do curso de **Tecnologia em Sistemas para Internet** do SENAC.

---

## 📝 Funcionalidades

- **POST /produto**: Adiciona uma novo produto vegano.
- **GET /produto?nome=**: Retorna todos os produtos ou filtra por nome.
- **PUT /produto/:id**: Atualiza os dados de um produto específico.
- **DELETE /produto/:id**: Remove um produto pelo ID.

---

## 🚀 Como Rodar a API

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- Um gerenciador de pacotes como `npm` ou `yarn`.
- Um cliente para testar a API, como **Postman** ou **Insomnia**.

### Passo a Passo

1. **Clone ou baixe o projeto**
   - Clone o repositório do GitHub:
     ```bash
     git clone https://github.com/CristianeSanMiguel/api-produtos-veganos
     ```
   - Descompacte o arquivo ZIP enviado.

2. **Instale as dependências**
   - Abra o terminal na pasta do projeto e execute:
     ```bash
     npm install
     ```

3. **Inicie o servidor**
   - No terminal, execute:
     ```bash
     node index.js
     ```
   - O servidor será iniciado em `http://localhost:3000`.

4. **Acesse o endpoint principal**
   - Abra o navegador e visite:
     ```
     http://localhost:3000
     ```
   - Você verá a mensagem: *"Bem-vindo à API de Produtos Veganos!"*

5. **Teste os endpoints**
   - Use o **Postman** ou outro cliente para testar as seguintes rotas:
     - **POST /produto**: Adiciona uma novo produto.
     - **GET /produto?nome=**: Lista todos os produtos ou busca por nome.
     - **PUT /produto/:id**: Atualiza os dados de um produto pelo ID.
     - **DELETE /produto/:id**: Exclui um produto pelo ID.

---

## 🧪 Exemplos de Testes no Postman

### POST /produto
```json
{
  "nome": "Bolo de Cenoura Vegano",
  "descricao": [""Bolo de Cenoura Vegano coberto de chocolate],
  "preco": "50 minutos",
  "estoque": 8
}
