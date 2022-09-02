import { useState } from 'react';
import Titulo from './components/Titulo';
import Button from './components/Button';


function App() {

  const [count, setCount]  = useState(0);


  return (
    <>

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
