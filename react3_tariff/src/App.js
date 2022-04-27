import styles from './App.css';
import Tariff from './components/Tariff';
import Tariffs from './tariffs.json'
// import blue from "./components/blue.css";
// import green from "./components/green.css";

function App() {
  return (
    <div className={styles.App}>
      {
      Tariffs.map((tariff) =>
    <Tariff name={tariff.name} price={tariff.price} mgb={tariff.mgb} isHighlight={tariff.isHighlight}></Tariff>)
    }
    </div>
  );
}

export default App;