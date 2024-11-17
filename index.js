//Configuração do Servidor

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//Rota de principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu API de Produtos!');
  });
  

//ENDPOINT POST/produto
let produtos = [
    { id: 1, nome: "Faláfel", descricao: "Bolinho de grão-de-bico temperado", preco: 12.0, estoque: 100 },
    { id: 2, nome: "Hambúrguer de Soja", descricao: "Hambúrguer vegano feito de soja", preco: 8.5, estoque: 50 },
    { id: 3, nome: "Shawarma Vegano", descricao: "Recheio de legumes e especiarias", preco: 15.0, estoque: 30 },
    { id: 4, nome: "Coxinha de Jaca", descricao: "Coxinha feita com recheio de jaca desfiada", preco: 6.0, estoque: 80 }
  
];

// Rota para adicionar um novo produto
app.post('/produto', (req, res) => {
  const { nome, descricao, preco, estoque } = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    descricao,
    preco,
    estoque,
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

//ENDPOINT GET /produto
// Rota para listar produtos, com filtro opcional por nome
app.get('/produto', (req, res) => {
    const { nome } = req.query;
  
    const resultado = nome
      ? produtos.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()))
      : produtos;
  
    res.json(resultado);
  });

  
//ENDPOINT PUT /produto/
// Rota para atualizar um produto pelo ID
app.put('/produto/:id', (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;
  
    const produtoIndex = produtos.findIndex(prod => prod.id == id);
  
    if (produtoIndex === -1) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
  
    produtos[produtoIndex] = { id: Number(id), nome, descricao, preco, estoque };
    res.json(produtos[produtoIndex]);
  });
  
//ENDPOINT DELETE /produto/
// Rota para deletar um produto pelo ID
app.delete('/produto/:id', (req, res) => {
    const { id } = req.params;
    const produtoIndex = produtos.findIndex(prod => prod.id == id);
  
    if (produtoIndex === -1) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
  
    produtos.splice(produtoIndex, 1);
    res.status(204).end();
  });
  