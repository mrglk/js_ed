import { useState } from "react";
import styles from './App.css';
import Tariff from './components/Tariff';
import Tariffs from './tariffs.json';
import blue from "./components/blue.css";
import green from "./components/green.css";
import red from "./components/red.css";
import black from "./components/black.css";

function App() {
  const themes = [blue, green, red, black]
  const [selected, setSelected] = useState();

  return (
    <div className={styles.App}>
      {
        Tariffs.map((tariff, i) =>
          <Tariff
            key={tariff.price}
            name={tariff.name}
            price={tariff.price}
            mgb={tariff.mgb} 
            theme={themes[i]} 
            selected={selected === i}
            onClick={() => setSelected(i)}
          />
        )
      }
    </div>
  );
}

export default App;