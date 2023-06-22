import React from "react";
import arrowBlack from '../assets/img/arrow.jpg';

function Sort() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ["популярности", "цене", "алфавиту"];
  const sortName = list[selected];

  const onClickListItem = (index) => {
    setSelected(index);
    setOpen(false);
  };
  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowBlack} alt="#" width='15'/>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sortName}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                className={selected === i ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
