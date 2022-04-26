import '../styles/App.css';
import { useState } from 'react';
import phraseList from '../data/phrases.json';

function App() {
  //useState
  const [data, setData] = useState(phraseList);
  const [newFhrase, setNewFhrase] = useState({
    quote: '',
    character: '',
  });
  const [search, setSearch] = useState('');
  const [searchSelect, setSearchSelect] = useState('todos');

  const handleSearchSelect = (ev) => {
    setSearchSelect(ev.target.value);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handleNewPerson = (ev) => {
    setNewFhrase({
      ...newFhrase,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleClickBnt = (ev) => {
    ev.preventDefault();
    setData([...data, newFhrase]);
    setNewFhrase({
      quote: '',
      character: '',
    });
  };

  const htmlData = (ev) => {
    return data
      .filter((person) => {
        return (
          person.character.toLowerCase().includes(search.toLowerCase()) ||
          person.quote.toLowerCase().includes(search.toLowerCase())
        );
        person.character.includes(searchSelect);
      })

      .map((person, index) => {
        return (
          <li key={index}>
            <p>{person.quote}</p>
            <h3>{person.character}</h3>
          </li>
        );
      });
  };
  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>

      <main>
        <form>
          <label>
            Buscar por frase
            <input
              autoComplete="off"
              type="search"
              name="search"
              placeholder="Frases"
              onChange={handleSearch}
            />
          </label>
          <label>
            Filtrar por personaje:
            <select onChange={handleSearchSelect}>
              <option>Todos</option>
              <option>Ross</option>
              <option>Monica</option>
              <option>Jaey</option>
              <option>Phoebe</option>
              <option>Chandler</option>
              <option>Rachel</option>
            </select>
          </label>
        </form>

        <ul>{htmlData()}</ul>

        <form>
          <h2>Añadir una nueva Frase</h2>
          <label>
            Frase
            <input
              name="quote"
              id="quote"
              type="text"
              onChange={handleNewPerson}
              value={newFhrase.quote}
            />
          </label>
          <label>
            Personaje
            <input
              name="character"
              id="character"
              type="text"
              onChange={handleNewPerson}
              value={newFhrase.character}
            />
          </label>
          <button onClick={handleClickBnt}>Añadir una nueva frase</button>
        </form>
      </main>
    </div>
  );
}

export default App;
