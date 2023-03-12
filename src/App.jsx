import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {

  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    content: ''
  });

  const loadCards = () => {
    fetch('http://localhost:7777/notes')
      .then(response => response.json())
      .then(data => setCards(data));
  };

  useEffect(loadCards, []);

  return (
    <div className="App">
      <Cards cards={cards} setCards={setCards} loadCards={loadCards} />
      <Form form={form} setForm={setForm} cards={cards} setCards={setCards} loadCards={loadCards} />
    </div>
  )
}

export default App
