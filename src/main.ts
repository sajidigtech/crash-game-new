import { Application, Assets, path, Sprite } from "pixi.js";
import "./main.css";

import crashScoket from "./web-socket/CrashSocket";


  // Create a new application
  const app = new Application();

  // Initialize the application
  // await app.init({ background: "#1099bb", resizeTo: document.getElementById("pixi-container")! });

  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  

 

// onPhaseChange((data)=>{

//   console.log("phase change ka data : ", data)

// })

import eventEmitter from "./Globals/eventEmitter";

eventEmitter.on("sajid", ()=>{

})

eventEmitter.on("sajid", ()=>{
  
})
eventEmitter.on("sajid", ()=>{
  
})
eventEmitter.on("sajid", ()=>{
  
})
eventEmitter.on("sajid", (data)=>{

  console.log("data")
  
})


eventEmitter.emit("sajid","yo");

eventEmitter.showEventDetails();

eventEmitter.showEventDetails();