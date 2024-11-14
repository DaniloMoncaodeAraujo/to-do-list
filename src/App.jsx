import { v4 as uuidv4 } from 'uuid';
import React, { useState, useRef } from 'react';

import { ContainerFather, Container, ToDoList, Input, Button, ListItem, Trash, Check, H3 } from './styles.js';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const maxWords = 10;
  const maxWordLength = 15;

  function inputChange(event) {
    setTask(event.target.value);
    setError('');
  }

  function clickButton() {
    const words = task.trim().split(/\s+/);

    if (words.length > maxWords) {
      setError(`Limite de ${maxWords} palavras atingido.`);
      return;
    }
    if (words.some(word => word.length > maxWordLength)) {
      setError(`Cada palavra deve ter no máximo ${maxWordLength} caracteres.`);
      return;
    }

    if (task) {
      setList([...list, { id: uuidv4(), task: task, finished: false }]);
      setTask('');
    }
  }

  function finishedTaref(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ));
    setList(newList);
  }

  function deletItem(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function handleButtonClick() {
    inputRef.current.focus();
  }

  return (
    <ContainerFather>
      <Container>
        <h2><span>TaskMaster:</span> Seu Gerenciador de Tarefas</h2>
        <h3>Organize suas tarefas da melhor forma e aumente sua produtividade!✨</h3>
        <p>Tenha controle total sobre suas atividades, sem complicações.</p>
        <button onClick={handleButtonClick}>Comece a organizar agora</button>
      </Container>

      <ToDoList>
        <div className='container-one'>
          <Input 
            ref={inputRef} 
            value={task} 
            onChange={inputChange} 
            placeholder="O que tenho para fazer..." 
            type="text" 
          />
          <Button onClick={clickButton}>Adicionar</Button>
          {error && <p className="paragrafo-error">{error}</p>} 
        </div>

        <div className='container-two'>
          <ul>
            {list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finishedTaref(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <H3>No momento não há itens na lista! Comece a Adicioná-los😁</H3>
            )}
          </ul>
        </div>
      </ToDoList>
    </ContainerFather>
  );
}

export default App;