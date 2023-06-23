import React from "react";
import orangePlus from './imgPlus/orangePlus.png'

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ["тонкое", "традиционное"];
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" alt="Pizza" src={imageUrl} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
              >
                {typeNames[typeId]}{" "}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price}P</div>
          <button className="button button--outline button--add">
            <img width='12' src={orangePlus} alt="#" />
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
