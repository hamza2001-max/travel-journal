import './App.css';
import Card from './components/card';
import NavSection from './components/navSection';
import data from './data';

function App() {
  const dataElements = data.map(dataElement => {
    return (
      <Card
        key={dataElement.id}
        {...dataElement}
      />
    )
  })
  return (
    <div className="App">
      <NavSection />
      <div className='dataElements-container'>
        {dataElements}
      </div>
    </div>
  );
}

export default App;
