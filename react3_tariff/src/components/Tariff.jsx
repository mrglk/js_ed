import styles from "./Tariff.module.scss";
import * as cx from "classnames";

function Tariff(props) {
  const classTariff = cx(styles.Tariff, {
    [styles.Tariff_highlight]: props.isHighlight,
  });

  return (
    <div className={classTariff}>
      <div className={cx(styles.Tariff__header, props.theme.Tariff__header)}>
        <h3>{props.name}</h3>
      </div>
      <div
        className={cx(
          styles.Tariff__priceWrapper,
          props.theme.Tariff__priceWrapper
        )}>
        <sup className={styles.Tariff__currency}>руб</sup>
        <h1 className={styles.Tariff__price}>{props.price}</h1>
        <span className={styles.Tariff__month}>/мес</span>
      </div>
      <div className={styles.Tariff__mgb}>
        <span>{props.mgb}</span>
      </div>
      <div className={styles.Tariff__volume}>
        <span>
          Объем включенного <br></br>трафика не ограничен
        </span>
      </div>
    </div>
  );
}

export default Tariff;
