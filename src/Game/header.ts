import { Container, Application, Graphics, Text } from "pixi.js";
import crashSocket from "../web-socket/CrashSocket";

import { boxColors } from "../configs/headerConfig";



// ye header me apan wo values dalenge 
export class Header extends Container {

    headBoxGap: number = 2;
    app!: Application
    bg !: Graphics

    maxBoxes: number = 6; // limit of boxes

    constructor(app: Application) {
        super();
        this.app = app;
        this.generateHeader();

        crashSocket.onRoundStopped((data) => {

            const value = data.data.crashRate;

            // console.log("bhai dekh data : ", data)

            this.addValue(value)


        })
    }


    generateHeader() {
        this.bg = new Graphics();
        this.bg.fill(0xF2B8A2)
        this.bg.rect(0, 0, this.app.screen.width, 40);
        this.bg.fill();
        this.addChild(this.bg)
    }

    async addValue(value: number) {
        const boxWidth = 80;
        const boxHeight = 40; // header height

        const color = value > 5 ? boxColors.green : boxColors.red

        // Container for one box + text
        const boxContainer = new Container();

        // Graphics box
        const box = new Graphics();
        box.beginFill(color);
        box.drawRect(0, 0, boxWidth, boxHeight);
        box.endFill();

        // Text centered in the box
        const txt = new Text(String(value), { fill: 0xffffff, fontSize: 14 });
        txt.anchor.set(0.5);
        txt.position.set(boxWidth / 2, boxHeight / 2);

        // Add box and text to container
        boxContainer.addChild(box);
        boxContainer.addChild(txt);

        // Position container horizontally
        const index = this.children.length - 1; // -1 to ignore bg
        // -1 islie kia kyunki this.child yani header me "bg " bhi ek child hai 


        boxContainer.x = index * (boxWidth + this.headBoxGap);
        boxContainer.y = 0;

        // Add to header
        this.addChild(boxContainer);

        if (this.children.length - 1 >= this.maxBoxes) {

            // wait 2 seconds
            await new Promise((res) => setTimeout(res, 5000));
            while (this.children.length > 1) {
                this.removeChildAt(1); // 0 = bg
            }

        }
    }

}