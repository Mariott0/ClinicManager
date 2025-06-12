import { api } from './api';

export const getProfissionais = async () => (await api.get('/profissional')).data;
export const getProfissional = async (id: string) => (await api.get(`/profissional/${id}`)).data;
export const createProfissional = async (data: any) => (await api.post('/profissional', data)).data;
export const updateProfissional = async (id: string, data: any) => (await api.patch(`/profissional/${id}`, data)).data;
export const deleteProfissional = async (id: string) => (await api.delete(`/profissional/${id}`)).data;
