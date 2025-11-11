import {api} from "./api";
// import { apiPost } from "./api";

export const login = async (credenciais) => {
  try {
    const response = await api.post('/auth/login', credenciais);

    const token = response.data.token; 

    if (token) {
      localStorage.setItem('authToken', token);
    }

    return response.data;

  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}


export async function getProduto() {
    const {data} = await api.get("/api/produtos",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    return data
}

// Função para POST
 export const criarProduto= async ( produtos ) => {
    const {data} = await apiPost.post('api/produtos/', produtos, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    return data
 }
 // Função para UPDATE
 export const atualizarProduto = async (id, produtos) => {
    const {data} = await apiPost.put(`/posts/${id}`, produtos)
    return data
 }
 // Função para DELETE
 export const deletarProduto = async ( id ) => {
    const {data} = await apiPost.delete(`/posts/${id}`)
    return data
 }

 export const loginApi = async(usuario) =>{
   const {data} = await apiPost.post('/login',usuario)
   return data
 }