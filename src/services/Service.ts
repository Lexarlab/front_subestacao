import axios from 'axios';

const API_URL = 'https://sistemasubestacao.onrender.com/subestacao';

export const buscarTodos = async (): Promise<any[]> => {
  try {
    const resposta = await axios.get(API_URL);
    return resposta.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};

export const cadastrar = async (subestacao: {
  codigo: string;
  nome: string;
  latitude: number;
  longitude: number;
}) => {
  try {
    const response = await axios.post(API_URL, subestacao);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    throw error;
  }
};

export const atualizar = async (
  id: number,
  subestacao: {
    codigo: string;
    nome: string;
    latitude: number;
    longitude: number;
  }
) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, subestacao);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar:', error);
    throw error;
  }
};

export const deletar = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar:', error);
    throw error;
  }
};