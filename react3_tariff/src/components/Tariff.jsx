import styles from "./Tariff.css";

function Tariff(props) {
  return (
    <div
      className={
        styles.Tariff + " " + (props.isHighlight && styles.Tariff_highlight)
      }>
      <div
        className={
          styles.Tariff__header +
          " " +
          (props.isHighlight && styles.Tariff__header_highlight)
        }>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.Tariff__priceWrapper}>
        <sup className={styles.Tariff__currency}>руб</sup>
        <h1 className={styles.Tariff__price}>{props.price}</h1>
        <span className={styles.Tariff__month}>/мес</span>
      </div>
      <div className={styles.Tariff__mgb}>
        <span>{props.mgb}</span>
      </div>
      <div
        className={
          styles.Tariff__volume +
          " " +
          (props.isHighlight && styles.Tariff__volume_highlight)
        }>
        <span>
          Объем включенного <br></br>трафика не ограничен
        </span>
      </div>
    </div>
  );
}

export default Tariff;
