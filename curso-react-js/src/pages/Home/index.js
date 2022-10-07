import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counter, incrementCounter } from '../../store/counter/counterSlice';
import Container from './styles';
import Button from '../../components/Button';

const Home = () => {

  const count = useSelector(counter);
  const dispatch = useDispatch()

  return (
    <Container>
      <h1>Home do Curso</h1>
      <hr/>
      Contador: {count.value}

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
