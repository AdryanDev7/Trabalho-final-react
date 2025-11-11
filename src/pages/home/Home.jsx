import React, { use } from 'react';
import { Card } from '../../components/Card/Card';
import { api } from '../../service/api';
import { useState, useEffect } from 'react';
import { getProduto } from '../../service/apiService';

export const Home = () => {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function BuscarProdutos() {
    try {
      const response = await getProduto();
      console.log(response);
      setProdutos(response);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    BuscarProdutos();
  }, []);
console.log(produtos);

  return (
    <div>
      <h1>Página Inicial (Home)</h1>
      <p>funciona por favor</p>
      <br />

      <h2>Produtos:</h2>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>Erro: {error.message}</div>
      ) : (
        produtos.map(produto => (
          <Card
            key={produto.id}
            title={produto.nome}
            description={produto.descricao}
            image={produto.imagem}
          />
        ))
      )}

      <button onClick={() => console.log("Botão clicado")}>SALVAR LOCAL STORAGE</button>
    </div>
  );
};