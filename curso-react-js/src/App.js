
function App() {

  const curso = <h3>Curso de React</h3>;
  const like = true;
  const cursos = ['HTML', 'CSS', 'JS', 'ReactJS'];

  return (
    <>
      <h1>Bem vindo!</h1>
      <h2>Aula 01</h2>
      {curso}
      <p>Gostando: {like ? 'SIM' : 'NÃO'}</p>

      {like &&
        <p className="destaque">Estou curtindo o conteúdo do curso</p>
      }
      {/* comentario */}
      <ul>
      {cursos.map((c, index) => {
        return <li key={index}>{c}</li>
      })}
      </ul>
    </>
  );
}

export default App;
