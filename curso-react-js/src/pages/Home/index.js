import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterValue, incrementCounter } from '../../store/counter/counterSlice';
import Container from './styles';
import Button from '../../components/Button';

const Home = () => {

  const count = useSelector(counterValue);
  const dispatch = useDispatch()

  return (
    <Container>
      <h1>Home do Curso</h1>
      <hr/>
      Contador: {count}

      <Button
        onClick={() =>{
          dispatch(incrementCounter())
        }}
      >
        Incrementa
      </Button>
    </Container>
  )
}

export default Home;
