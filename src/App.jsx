import React from "react"
import { useEffect, useState } from "react";
import './App.css';
function App(){
  const [n1, n1Set] = useState("")
  const [n2, n2Set] = useState("")
  const [operator, operatorSet] = useState("")
  const [result, ResultSet] = useState("")

  function addNumber(number) {
    if (result !== "" && operator === "") {
      erase();
    }

    if (operator === "") {
      document.getElementById("display").innerHTML += number;
      n1Set(n1 + number);
    } else if (operator !== "" && n2 === "") {
      document.getElementById("display").innerHTML = "";
      document.getElementById("display").innerHTML = number;
      n2Set(number);
  
    } else {
      document.getElementById("display").innerHTML += number;
      n2Set(n2 + number);
  
    }
  }

  function erase(){
    n1Set("");
    n2Set("");
    operatorSet("");
    ResultSet("");
    document.getElementById("display").innerHTML = "";
  }

  function addOperator(operatorSelected) {
    if (n1 !== "") {
      operatorSet(operatorSelected)
    }
  }

  function calculate(event) {
    event.preventDefault();

    if (n1 !== "" && n2 !== "" && operator !== "") {
      switch (operator) {
        case "+":
          ResultSet(parseInt(n1) + parseInt(n2));
          break;
          
          case "-":
          ResultSet(parseInt(n1) - parseInt(n2));
          break;
          
          case "*":
          ResultSet(parseInt(n1) * parseInt(n2));
          break;
          
          case "/":
          ResultSet(parseInt(n1) / parseInt(n2));
          break;
          case "^":
            ResultSet(parseInt(n1) ** parseInt(n2));
            break;
      
        default:
          break;
      }   
    }
  }
  
  useEffect(()=> {
    if(result !== ""){
      document.getElementById("display").innerHTML = "" + result.toFixed(2);
      n1Set("" + result);
      n2Set("");
      operatorSet("");
    }
  }, [result])

  return(
    <div id="calculator">
      <form action="" onSubmit={(e) => calculate(e)}>
        <span id="display"></span>
        <section id="buttonsGrid">
          <article id="numbersGrid">
            <button  className="operatorButton" onClick={() => erase()}>C</button>
            <button  className="operatorButtonOff"> </button>
            {/* <button  className="operatorButtonOff"> </button> */}
            <button  className="operatorButton" onClick={() => addOperator('^')}>^</button>
            
            <button type="button" className="numbersButton" onClick={() => addNumber('7')}> 7 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('8')}> 8 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('9')}> 9 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('4')}> 4 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('5')}> 5 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('6')}> 6 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('1')}> 1 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('2')}> 2 </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('3')}> 3 </button>
            <button  className="numbersButtonOff"> </button>
            <button type="button" className="numbersButton" onClick={() => addNumber('0')}> 0 </button>
            <button  className="numbersButtonOff"> </button>
          </article>
          <article id="operatorsGrid">
          <button type="button" className="operatorButton" onClick={() => addOperator("/")} >/</button>
          <button type="button" className="operatorButton" onClick={() => addOperator("*")} >X</button>
          <button type="button" className="operatorButton" onClick={() => addOperator("-")} >-</button>
          <button type="button" className="operatorButton" onClick={() => addOperator("+")} >+</button>
          <button type="submit" className="submitButton" >=</button>
          </article>
        </section>

      </form>
    </div>
  )
}

 
export default App