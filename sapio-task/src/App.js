import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';
import './components/Card.css'


function App() {

  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("I may help you");
  const [color, setColor] = useState("");
  const [visiblity, setVisiblity] = useState(false);
  // let tagArray = ["	Affirmative", "	Contrary", "	Neutral"]
  let data = "";
  let tag = "";
  
  function inputHandler(event){
    setQuestion(event.target.value)
  }

  let params = encodeURIComponent({question});
  let uri = "https://8ball.delegator.com/magic/JSON/" + params;
  fetch(uri)
  .then(response => response.json())
  .then(json => {
    console.log(json.magic);
    data = json.magic.answer;
    tag = json.magic.type;
  });

  function showAnswer(){
    setVisiblity(true);
    setAnswer(data);

    if(tag === "Affirmative")
    {
      setColor("rgb(36, 250, 8)");
    }
    if(tag === "Contrary")
    {
      setColor("rgb(250, 56, 8)");
    }
    if(tag === "Neutral")
    {
      setColor("rgb(8, 222, 250)")
    }
  }
  
  function changeVisiblity()
  {
    setVisiblity(false);
  }
  

  return (
    <div className="App">
      <h1 className = "linear-gradient"> Write your question below</h1>


      <div className = "content">
        <input type = "text" value = {question} onChange = {inputHandler}/>
        <br />
        <button className="pushable" onClick = {showAnswer}>
          <span className="front">
            Get Answer
          </span>
        </button>

        <button className="pushable" onClick = {changeVisiblity}>
          <span className="front">
            Reset
          </span>
        </button>
      </div>


      {visiblity ? 
      <Card finalAnswer = {answer} dataColor = {color} />
      : null }
    </div>
  );
}

export default App;