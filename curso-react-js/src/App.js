import { useState, useEffect } from 'react';
import Titulo from './components/Titulo';
import Button from './components/Button';
import Titulo2 from './components/Titulo2';


function App() {

  const [count, setCount]  = useState(0);
  const [nome, setNome] = useState();

  const cursos = ['React JS', 'Node JS', 'JS & CSS Pro'];

  useEffect(() => {
    if (nome) {
      console.log(`Trocou o nome para ${nome}`);
    }
  },[nome]);

  useEffect(() => {
    console.log(`Trocou o count para ${count}`);
  },[count]);





  return (
    <>
      <Titulo2 nome={nome} />
      {cursos.map((c, index) => {
        return (
          <p key={index}>
            <label>
              <input 
                type="radio"
                name="cursos"
                value={c}
                onClick={(e) => {
                  setNome(e.target.value);
                }}
              /> {c}
            </label>
          </p>
        )
      })}


      <Titulo nome='Cícero' numero={count} onClick={() => setCount(10) } />
      {/* Crie um componente Button retornando um botao em HTML e o carregue nesta App */}
      
      <p>Contador: {count}</p>

      <Button 
        titulo="< Contador"
        onClick={
          () => {
            setCount(count - 1);
          }
        }
      />

      <Button 
        titulo="Contador >"
        onClick={() => {
          setCount(count + 1);
        }}
      />





      
    </>
  );
}

export default App;
