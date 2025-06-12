import { api } from './api';

export const getPacientes = async () => (await api.get('/paciente')).data;
export const getPaciente = async (id: string) => (await api.get(`/paciente/${id}`)).data;
export const createPaciente = async (data: any) => (await api.post('/paciente', data)).data;
export const updatePaciente = async (id: string, data: any) => (await api.patch(`/paciente/${id}`, data)).data;
export const deletePaciente = async (id: string) => (await api.delete(`/paciente/${id}`)).data;
