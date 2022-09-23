import api from './api';

const headers = {
  'Authorization': 'Bearer PROCEMPA'
}

const getDepartamentos = async () => {
  const resp = await api.get('/departamentos/', { headers });
  return resp.data;
}

export default getDepartamentos;