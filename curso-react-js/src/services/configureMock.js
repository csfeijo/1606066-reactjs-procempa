import MockAdapter from 'axios-mock-adapter';
import departamentosMock from '../mocks/departamentosMock.json';

const configureMock = (axios) => {
  const mock = new MockAdapter(axios, { delayResponse: 2000 } );
  

  // aqui vamos configurar os responses
  mock.onGet('/departamentos/').reply(200, departamentosMock);

  mock.onPost('/departamentos/').reply(200, {"success":"Value added"});

  // mock
  //   .onGet('/departamentos/').reply(200, departamentosMock)
  //   .onPost('/departamentos/').reply(200, {"success":"Value added"});

}

export default configureMock;