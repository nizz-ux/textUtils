import React, { useState } from 'react'


export default function Card(props) {
  const [text, setText] = useState('enter text');


  const onchange = (event) => {
    const value = event.target.value;
    setText(value)

  }

  const handleOperation = (operation) => {
    if (text === ' ') {
      props.showalert('please enter some text', 'danger');
      return;
    }
    // operation();
  };


  const onclickupcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("convert to uppercase", "success");
    handleOperation();
    document.title = alert("upper case")
  }
  const onclicklwcase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("convert to lowercase", "success");
    handleOperation();
  }

  const onclicktrim = () => {
    let newText = text.trim();
    setText(newText);
    props.showalert("convert to trim", "success");
    handleOperation();
  }
  const onclickclear = () => {
    let newText = ' ';
    setText(newText);
    props.showalert("clear", "success");
    handleOperation();
  }

  const onclickspeak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);

  }
  const reversed = () => {
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
    props.showalert("text reversed suceessfully", "success");
    handleOperation();
  };

  const capital = () => {
    let uppcase = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    let newText = text.split(' ').map(uppcase).join(' ');
    setText(newText);
    handleOperation();
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={onchange} style={{ backgroundColor: props.mode === 'light' ? 'rgb(43, 45, 45)' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-dark me-2' onClick={onclickupcase}>convert to uppcase</button>
        <button className="btn btn-dark  me-2 " onClick={onclicklwcase}>convert to lowercase</button>
        <button className="btn btn-dark  me-2 " onClick={onclicktrim}>trim</button>
        <button className="btn btn-dark  me-2 " onClick={onclickclear}>clear</button>
        <button className="btn btn-dark  me-2 " onClick={onclickspeak}>speak</button>
        <button className="btn btn-dark  me-2 " onClick={reversed}>reverse</button>
        <button className="btn btn-dark  me-2 " onClick={capital}>capital</button>
      </div>


      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1> Your Text Summary</h1>
        <p>{text.split(" ").length - 1}words and {text.length}text</p>
        <p>{0.008 * text.split(' ').length}min</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : 'enter the word..'}</p>
      </div>
    </>
  )
}


Card.defaultProps = {
  heading: "enter tou text",
}