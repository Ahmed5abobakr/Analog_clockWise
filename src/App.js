import React ,{useEffect, useState} from "react";
import "./App.css";

export default function App() {
const [time, setTime] = useState(new Date());

useEffect(()=> {
  const timer = setInterval(() => setTime(new Date()),1000)
  return () => clearInterval(timer);


}, []);
const seconds = time.getSeconds();
const minutes = time.getMinutes();
const hours = time.getHours();

return (
  <div className="clock-container">
    <div className="clock">
      <div className="hand hour"  style={{transform: `rotate(${hours * 30 + minutes / 2}deg)`}}
      ></div>
      <div className="hand minutes" style={{ transform:`rotate(${minutes * 6}deg)`}}></div>
      <div className="hand second"  style={{transform: `rotate(${seconds * 6}deg)`}}></div>
      <div className="center"></div>
    </div>
  </div>
);
}

