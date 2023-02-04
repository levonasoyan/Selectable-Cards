import { useState } from "react";
import "./Home.scss";
const Home = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="home_wrapper">
      <div className="flex_center">
        <div className="card">
          <p>{selected}</p>
        </div>
      </div>
      <div className="flex_wrap">
        <div
          onClick={() => setSelected(1)}
          className={selected === 1 ? "card selected_card" : "card"}
        >
          <p>1</p>
        </div>
        <div
          onClick={() => setSelected(2)}
          className={selected === 2 ? "card selected_card" : "card"}
        >
          <p>2</p>
        </div>
        <div
          onClick={() => setSelected(3)}
          className={selected === 3 ? "card selected_card" : "card"}
        >
          <p>3</p>
        </div>

        <div
          onClick={() => setSelected(4)}
          className={selected === 4 ? "card selected_card" : "card"}
        >
          <p>4</p>
        </div>

        <div
          onClick={() => setSelected(5)}
          className={selected === 5 ? "card selected_card" : "card"}
        >
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
