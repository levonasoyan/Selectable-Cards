import { useState } from "react";
import "./Home.scss";
const Home = () => {
  const [selected, setSelected] = useState({ number: 0, active: false });
  return (
    <div className="home_wrapper">
      <div className="flex_center">
        <div className="card">
          <p>{selected.number}</p>
        </div>
      </div>
      <div className="flex_wrap">
        <div
          onClick={() => setSelected({ number: 1, active: !selected.active })}
          className={
            selected.number === 1
              ? "card selected_card"
              : "card"
          }
        >
          <p>1</p>
        </div>
        <div
          onClick={() => setSelected({ number: 2, active: !selected.active })}
          className={
            selected.number === 2
              ? "card selected_card"
              : "card"
          }
        >
          <p>2</p>
        </div>
        <div
          onClick={() => setSelected({ number: 3, active: !selected.active })}
          className={
            selected.number === 3
              ? "card selected_card"
              : "card"
          }
        >
          <p>3</p>
        </div>

        <div
          onClick={() => setSelected({ number: 4, active: !selected.active })}
          className={
             selected.number === 4
              ? "card selected_card"
              : "card"
          }
        >
          <p>4</p>
        </div>

        <div
          onClick={() => setSelected({ number: 5, active: !selected.active })}
          className={
             selected.number === 5
              ? "card selected_card"
              : "card"
          }
        >
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
