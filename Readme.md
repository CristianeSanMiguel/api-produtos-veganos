# API de Receitas Veganas

Bem-vindo à minha API de Receitas Veganas! Esta API foi desenvolvida para gerenciar receitas veganas, permitindo que os usuários adicionem, consultem, editem e excluam receitas de maneira simples. O projeto foi feito como requisito da matéria de **Desenvolvimento de API REST** do curso de **Tecnologia em Sistemas para Internet** do SENAC.

---

## 📝 Funcionalidades

- **POST /receita**: Adiciona uma nova receita vegana.
- **GET /receita?nome=**: Retorna todas as receitas ou filtra por nome.
- **PUT /receita/:id**: Atualiza os dados de uma receita específica.
- **DELETE /receita/:id**: Remove uma receita pelo ID.

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
     git clone https://github.com/seu-usuario/seu-repositorio.git
     ```
   - Ou descompacte o arquivo ZIP enviado.

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
   - Você verá a mensagem: *"Bem-vindo à API de Receitas Veganas!"*

5. **Teste os endpoints**
   - Use o **Postman** ou outro cliente para testar as seguintes rotas:
     - **POST /receita**: Adiciona uma nova receita.
     - **GET /receita?nome=**: Lista todas as receitas ou busca por nome.
     - **PUT /receita/:id**: Atualiza os dados de uma receita pelo ID.
     - **DELETE /receita/:id**: Exclui uma receita pelo ID.

---

## 🧪 Exemplos de Testes no Postman

### POST /receita
```json
{
  "nome": "Bolo de Cenoura Vegano",
  "ingredientes": ["cenoura", "farinha", "açúcar", "óleo", "fermento"],
  "tempo_preparo": "50 minutos",
  "porcoes": 8
}
