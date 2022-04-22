import './App.css';
import Card from "./components/Card.jsx";
import Heroes from "./heroes.json"

function App() {
  return (
    <div class="superSection">
    <h1>Супергерои</h1>
    <div class="superSection__inner">
      {
        Heroes.map((hero) => 
        <Card name={hero.name} photo={hero.photo} universe={hero.universe} alter={hero.alter} occupation={hero.occupation} friends={hero.friends} power={hero.power} about={hero.about}></Card>)
      }
      </div>
    </div>
  );
}

export default App;
