import { useState } from "react";
import styles from "./FormCadastro.module.css";
import { criarProduto } from "../../service/apiService";


export const FormCadastro = () => {


    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque, setEstoque] = useState("");

    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!nome || !preco) {
            setLoading(false);
            return alert("Nome e Preço são obrigatórios.");
        }


        criar();
        alert(`Produto cadastrado!\nNome: ${nome}\nPreço: ${preco}`);


        setNome("");
        setPreco("");
        setDescricao("");
        setLoading(false);
        setEstoque("");
    };


    async function criar() {
        console.log("Criando produto...");
        try {

            const response = await criarProduto({
                nome: nome,
                preco: preco,
                descricao: descricao,
                estoque: estoque
            });


            console.log(response);



        } catch (error) {

            console.error("Erro ao criar produto:", error);

        } finally {

            setLoading(false);
        }


    }
    return (



        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Cadastro de Novo Produto</h2>

            <input
                type="text"
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Preço (ex: 29.99)"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Estoque"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className={styles.input}
            />

            <button
                type="submit"
                className={styles.button}
                disabled={loading}
            >
                {loading ? "A processar..." : "Cadastrar"}
            </button>
        </form>
    );
}