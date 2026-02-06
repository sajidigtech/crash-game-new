import { Application, Assets, path, Sprite } from "pixi.js";
import "./main.css";
import "./Globals/phase-manager"

import crashScoket from "./web-socket/CrashSocket";


  // Create a new application
  const app = new Application();

  // Initialize the application
  // await app.init({ background: "#1099bb", resizeTo: document.getElementById("pixi-container")! });

  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  
crashScoket.onGraphTimer((data)=>{

  console.log("data")

})
 

import eventEmitter from "./Globals/eventEmitter";

eventEmitter.on("phaseChange",(data)=>{

  console.log("bhai data ye rha dekho ek baar ",  data)

})

