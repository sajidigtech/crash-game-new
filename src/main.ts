import { Application, Assets, path, Sprite ,Graphics} from "pixi.js";
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

  

 

import eventEmitter from "./Globals/eventEmitter";

// eventEmitter.on("phaseChange",(data)=>{

//   if(data==="RUNNING"){
//     alert("graph timer ")
//   }

//   // console.log("bhai data ye rha dekho ek baar ",  data)

// })


// ✅ 1. Create circle
const circle = new Graphics();
circle.circle(0, 0, 50);
circle.fill(0xffffff);
circle.x = window.innerWidth / 2;
circle.y = window.innerHeight / 2;
app.stage.addChild(circle);



crashScoket.onGraphTimer((data)=>{
  console.log("graph chalu")
})

crashScoket.onRoundStarted(()=>{
  console.log("round started")
})

crashScoket.onRoundStopped(()=>{
  console.log("stopped")
})

crashScoket.onWaitingTimer(()=>{
  console.log("waiting timer ")
})


crashScoket.onRoundBettingOnHold(()=>{
  console.log("betitng hold");
})






