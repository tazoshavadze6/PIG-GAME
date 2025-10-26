import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [address, setAddress] = useState("./dice-1.png"); // მისამართი საიდანაც ვიღებთ ფოტოს
  const [current, setCurrent] = useState(0); // ეს არის რიცხვი და რიცხვების ჯამი რაც ამოდის კამათელზე
  const [player, setPlayer] = useState(false);
  const [leftPlayer, setLeftPlayer] = useState(0);
  const [rightPlayer, setRightPlayer] = useState(0);
console.log("testing branch")

useEffect( ()=> {
alert("player winner!!!!")
  
if(leftPlayer >= 100){
  alert("player 1 winner!")
} else if(rightPlayer >= 100){
  alert("player 2 winner!")
}


}, [leftPlayer, rightPlayer])
  function RandomNumber() {
    const x = Math.floor(Math.random() * 6) + 1; // ეს არის ფუნქცია რომელიც გვაძლევს რიცხვს 1 დან 6 მდე

    if (x !== 1) {
      setCurrent(current + x); // თუ x არ უდრის 1, ვაჯამებთ ყოველ შემდგომ რიცხვს
    } else {
      setCurrent(0); // თუ x ერთი ამოვიდა ჯამს ვანულებთ
      setPlayer(!player); // თუ ერთი ამოვიდა false იცვლება true დ ან პირიქით
    }

    if (x === 1) {
      // x ის მიხედვით ვცვლით მისამართს, რომელი კამათელის ფოტო გამოჩნდეს
      setAddress("./dice-1.png");
    } else if (x === 2) {
      setAddress("./dice-2.png");
    } else if (x === 3) {
      setAddress("./dice-3.png");
    } else if (x === 4) {
      setAddress("./dice-4.png");
    } else if (x === 5) {
      setAddress("./dice-5.png");
    } else if (x === 6) {
      setAddress("./dice-6.png");
    }
  }

  function Hold() {
if (player === false) {

  setLeftPlayer(leftPlayer + current)
}else{
  setRightPlayer(rightPlayer + current)
}

    setPlayer(!player);
    setCurrent(0);
  }
  useEffect(() => {
   if (leftPlayer >= 100) {
    alert("player 1 Winner!")
   }else if(rightPlayer >= 100){
    alert("player 2 winner!")
   }
  }, [leftPlayer, rightPlayer])


  function NewGame() {


    setLeftPlayer(0)
    setRightPlayer(0)
    setCurrent(0)
    setPlayer(false)
  }
  return (
    <>
      <main>
        <div className="mainBox">
          <div
            className="box1"
            style={{ backgroundColor: player === false ? "red" : "yellow" }}
          >
            <h1 className="player1">Player 1</h1>
            <span className="livePoint1">{leftPlayer}</span>
            <div className="currentBox">
              <span className="current">CURRENT</span>
              <span className="currentPoint">
                {player === false ? current : 0}
              </span>
            </div>
          </div>
          <div
            className="box2"
            style={{ backgroundColor: player === false ? "yellow" : "red" }}
          >
            <h1 className="player1">Player 2</h1>
            <span className="livePoint2">{rightPlayer}</span>
            <div className="currentBox">
              <span className="current">CURRENT</span>
              <span className="currentPoint">
                {player === true ? current : 0}
              </span>
            </div>
          </div>
          <button onClick={RandomNumber} className="rollDice">
            Roll Dice
          </button>
          <button onClick={Hold} className="hold">
            hold
          </button>
          <button onClick={NewGame} className="newGame">
            new Game
          </button>
          <img src={address} />
        </div>
      </main>
    </>
  );
}

export default App;