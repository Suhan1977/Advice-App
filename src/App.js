import React, { useState } from "react";
import "./App.css"
import axios from "axios";

const App = () => {
  const [adv, setAdv] = useState("");
  const [count, setCount] = useState(0);

  async function handleBtn() {
    if (count < 10) {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdv(response.data.slip.advice);
      setCount(count + 1);
    }
    else{
      alert("you have reached the limit! ")
    }
  }
  return (
    <div className="container">
     <div className="advice-card">
      <h1>Advice App</h1>
      <button className="get-btn" onClick={handleBtn}>Get An Advice</button>
      <h2 className="advice-display">{adv}</h2>
      <p className="stats">
        You have read <strong>{count}</strong> places of advices.{" "}
      </p>
      <p className="note"><strong>Note: </strong>You can make max 10 advices at a Time.</p>
     </div>
    </div>
  );
};

export default App;
