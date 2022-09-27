import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA'
}

export const getDepartamentos = async () => {
  const resp = await api.get('/departamentos/', { headers });
  return resp.data;
}

export const insereDepartamentos = async (data) => {
  const { nome, sigla } = data;
  const body = new FormData();
  body.append('nome', nome);
  body.append('sigla', sigla);

  const resp = await api.post('/departamentos/', data, { headers });

  return resp.data;
}


