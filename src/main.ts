import { Application, Graphics } from "pixi.js";
import "./main.css";
import "./Globals/phase-manager";
import crashScoket from "./web-socket/CrashSocket";

import { Header } from "./Game/header";

  const container = document.getElementById("pixi-container")!;
  console.log("container found:", container);

  const app = new Application();

  await app.init({
    background: "#1099bb",
    resizeTo: container,
  });

  container.appendChild(app.canvas);

  
  const circle = new Graphics();
  circle.circle(0, 0, 50);
  circle.fill(0xffffff);
  // circle.position.set(app.screen.width/2, app.screen.height/2);
  circle.position.set(0, 0);
  app.stage.addChild(circle);

  console.log("Pixi rendered ✅");

  crashScoket.onGraphTimer(() => {
    console.log("graph chalu")
  });
  

const header = new Header(app);

app.stage.addChild(header);


  