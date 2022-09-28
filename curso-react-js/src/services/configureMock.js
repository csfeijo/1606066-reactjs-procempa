import MockAdapter from 'axios-mock-adapter';
import departamentosMock from '../mocks/departamentosMock.json';

const configureMock = (axios) => {
  const mock = new MockAdapter(axios);

  // aqui vamos configurar os responses
  mock.onGet('/departamentos/').reply(200, departamentosMock);

  mock.onPost('/departamentos/').reply(500, {"success":"Value added"});

}

export default configureMock;