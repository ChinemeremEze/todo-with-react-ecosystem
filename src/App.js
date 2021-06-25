import styled from 'styled-components';
import React from 'react';
import Todolist from './todos/TodoList';
import './App.css';

const AppContainer = styled.div`
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 700px;
  height: 100vh;
  margin-top: 5%;
`;
function App() {
  return (
    <AppContainer>
      <Todolist />        
    </AppContainer>
  );
}

export default App;
