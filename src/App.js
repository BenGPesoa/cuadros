import React, { useState } from "react";
import "./App.css";
const App = () => {
const [style, setStyle] = useState("cont");
const [style2, setStyle2] = useState("cont2");
const [style3, setStyle3] = useState("cont");
const [style4, setStyle4] = useState("cont2");
const [style5, setStyle5] = useState("cont2");
const [style6, setStyle6] = useState("cont");
const [style7, setStyle7] = useState("cont2");
const [style8, setStyle8] = useState("cont");
const [style9, setStyle9] = useState("cont");
const [style10, setStyle10] = useState("cont2");
const [style11, setStyle11] = useState("cont");
const [style12, setStyle12] = useState("cont2");
const [style13, setStyle13] = useState("cont2");
const [style14, setStyle14] = useState("cont");
const [style15, setStyle15] = useState("cont2");
const [style16, setStyle16] = useState("cont");


const changeStyle = props => {  
	if (style == "cont") {
    setStyle("cont2");
  } else if (style == "cont2") {
    setStyle("cont");
  };	
};

const changeStyle2 = () => {
	if (style2 == "cont") {
    setStyle2("cont2");
  } else if (style2 == "cont2") {
    setStyle2("cont");
  };	
};

const changeStyle3 = () => {
	if (style3 == "cont") {
    setStyle3("cont2");
  } else if (style3 == "cont2") {
    setStyle3("cont");
  };	
};

const changeStyle4 = () => {
	if (style4 == "cont") {
    setStyle4("cont2");
  } else if (style4 == "cont2") {
    setStyle4("cont");
  };	
};

const changeStyle5 = () => {
	if (style5 == "cont") {
    setStyle5("cont2");
  } else if (style5 == "cont2") {
    setStyle5("cont");
  };	
};

const changeStyle6 = () => {
	if (style6 == "cont") {
    setStyle6("cont2");
  } else if (style6 == "cont2") {
    setStyle6("cont");
  };	
};

const changeStyle7 = () => {
	if (style7 == "cont") {
    setStyle7("cont2");
  } else if (style7 == "cont2") {
    setStyle7("cont");
  };	
};

const changeStyle8 = () => {
	if (style8 == "cont") {
    setStyle8("cont2");
  } else if (style8 == "cont2") {
    setStyle8("cont");
  };	
};

const changeStyle9 = () => {
	if (style9 == "cont") {
    setStyle9("cont2");
  } else if (style9 == "cont2") {
    setStyle9("cont");
  };	
};

const changeStyle10 = () => {
	if (style10 == "cont") {
    setStyle10("cont2");
  } else if (style10 == "cont2") {
    setStyle10("cont");
  };	
};

const changeStyle11 = () => {
	if (style11 == "cont") {
    setStyle11("cont2");
  } else if (style11 == "cont2") {
    setStyle11("cont");
  };	
};

const changeStyle12 = () => {
	if (style12 == "cont") {
    setStyle12("cont2");
  } else if (style12 == "cont2") {
    setStyle12("cont");
  };	
};

const changeStyle13 = () => {
	if (style13 == "cont") {
    setStyle13("cont2");
  } else if (style13 == "cont2") {
    setStyle13("cont");
  };	
};

const changeStyle14 = () => {
	if (style14 == "cont") {
    setStyle14("cont2");
  } else if (style14 == "cont2") {
    setStyle14("cont");
  };	
};

const changeStyle15 = () => {
	if (style15 == "cont") {
    setStyle15("cont2");
  } else if (style15 == "cont2") {
    setStyle15("cont");
  };	
};

const changeStyle16 = () => {
	if (style16 == "cont") {
    setStyle16("cont2");
  } else if (style16 == "cont2") {
    setStyle16("cont");
  };	
};


const changeStyleBtn1 = props => {  
	setStyle("cont");	
  setStyle2("cont");
  setStyle3("cont");
  setStyle4("cont");
  setStyle5("cont");
  setStyle6("cont");
  setStyle7("cont");
  setStyle8("cont");
  setStyle9("cont");
  setStyle10("cont");
  setStyle11("cont");
  setStyle12("cont");
  setStyle13("cont");
  setStyle14("cont");
  setStyle15("cont");
  setStyle16("cont");
};

const changeStyleBtn2 = () => {
	setStyle("cont2");	
  setStyle2("cont2");
  setStyle3("cont2");
  setStyle4("cont2");
  setStyle5("cont2");
  setStyle6("cont2");
  setStyle7("cont2");
  setStyle8("cont2");
  setStyle9("cont2");
  setStyle10("cont2");
  setStyle11("cont2");
  setStyle12("cont2");
  setStyle13("cont2");
  setStyle14("cont2");
  setStyle15("cont2");
  setStyle16("cont2");
};

const changeStyleBtn3 = () => {
	changeStyle();
  changeStyle2();
  changeStyle3();
  changeStyle4();
  changeStyle5();
  changeStyle6();
  changeStyle7();
  changeStyle8();
  changeStyle9();
  changeStyle10();
  changeStyle11();
  changeStyle12();
  changeStyle13();
  changeStyle14();
  changeStyle15();
  changeStyle16();
};





const cuadros = [
  {id: "1",
  style: "cont"},
  {id: "2",
  style: "cont2"},
  {id: "3",
  style: "cont"},
  {id: "4",
  style: "cont2"},
  {id: "5",
  style: "cont2"},
  {id: "6",
  style: "cont"},
  {id: "7",
  style: "cont2"},
  {id: "8",
  style: "cont"},
  {id: "9",
  style: "cont"},
  {id: "10",
  style: "cont2"},
  {id: "11",
  style: "cont"},
  {id: "12",
  style: "cont2"},
  {id: "13",
  style: "cont2"},
  {id: "14",
  style: "cont"},
  {id: "15",
  style: "cont2"},
  {id: "16",
  style: "cont"}
];


return (
	<>
	<div className="App">
  <div className="titulo">
        <h1>Variables de Colores</h1>
        <h2>Color 1:</h2>
        <button className="cont" onClick={changeStyleBtn1}></button>
        <h2>Color 2:</h2>
        <div className="cont2" onClick={changeStyleBtn2}></div>
        <h2>Negativo:</h2>
        <div className="cont3" onClick={changeStyleBtn3}></div>
    </div>
    <div className="cuadro">
        <button className={style} onClick={changeStyle}></button>
        <button className={style2} onClick={changeStyle2}></button>
        <button className={style3} onClick={changeStyle3}></button>
        <button className={style4} onClick={changeStyle4}></button>        
        <button className={style5} onClick={changeStyle5}></button>
        <button className={style6} onClick={changeStyle6}></button>
        <button className={style7} onClick={changeStyle7}></button>
        <button className={style8} onClick={changeStyle8}></button>
        <button className={style9} onClick={changeStyle9}></button>
        <button className={style10} onClick={changeStyle10}></button>
        <button className={style11} onClick={changeStyle11}></button>
        <button className={style12} onClick={changeStyle12}></button>        
        <button className={style13} onClick={changeStyle13}></button>
        <button className={style14} onClick={changeStyle14}></button>
        <button className={style15} onClick={changeStyle15}></button>
        <button className={style16} onClick={changeStyle16}></button>
    </div>
    <div className="cuadro">
    {cuadros.map(cuadro => <button key={cuadro.id} className={cuadro.style} onClick={changeStyleBtn3}></button>)}
    </div>
    </div>	
	</>
);
};
export default App;
