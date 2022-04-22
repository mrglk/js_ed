import "./Card.css";

function Card(props) {
  return (
    <div className="superSection__item">
      <div className="wrapper">
        <h2 className="superSection__header">{props.name}</h2>
        <div className="superSection__imgWrapper">
          <img
            className="superSection__img"
            src={props.photo}
            alt={props.name}
          />
        </div>
        <p>
          <strong>Вселенная: </strong>
          {props.universe}
        </p>
        <p>
          <strong>Альтер эго: </strong>
          {props.alter}
        </p>
        <p>
          <strong>Род деятельности: </strong>
          {props.occupation}
        </p>
        <p>
          <strong>Друзья: </strong>
          {props.friends}
        </p>
        <p>
          <strong>Суперсила: </strong>
          {props.power}
        </p>
        <p>
          <strong>Подробнее: </strong>
          {props.about}
        </p>
      </div>

      {/* <div className="slidecontainer">
        <strong>Оценка</strong>
        <input
          className="slider"
          type="range"
          min="1"
          max="10"
          value="5"
          id="myRange"
        />
        <span className="slider__span">5</span>
      </div> */}
    </div>
  );
}

export default Card;
