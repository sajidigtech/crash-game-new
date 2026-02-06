import { Application, Container, Texture, Assets, Sprite } from "pixi.js";
import { Header } from "./header";
import crashSocket from "../web-socket/CrashSocket";

export class Game extends Container {


    app!: Application
    background !: Sprite;
    rocket!: Sprite;
    crashedRocked !: Sprite
    header !: Header;

    textures!: Record<string, Texture>;





    constructor(app: Application) {
        super();
        this.app = app
      this.init();

    }


    async init() {

        // 1️ Define the asset bundle
        Assets.addBundle("GameAssets", {

            background: "/assets/background.png",
            rocket: "/assets/rocket.png",
            crashedRocket: "/assets/crashedRocket.png"
        })

        // 2️ Load the bundle
        this.textures = await Assets.loadBundle("GameAssets") 

        this.createBackground();
        this.createHeader();
        this.createRocket();
        this.handleRocketfromSocket();

    }

    createBackground() {
        this.background = new Sprite(this.textures.background);
        this.background.width = this.app.screen.width;
        this.background.height = this.app.screen.height;
        this.addChild(this.background);
    }

    createRocket() {
        this.rocket = new Sprite(this.textures.rocket);
        this.rocket.anchor.set(0.5)
        this.rocket.position.set(16, this.app.screen.height-20);
        this.rocket.scale.set(0.5)
        this.addChild(this.rocket)
    }
    createCrashedRocket() {

    }

    createHeader() {

        this.header = new Header(this.app); 
        this.addChild(this.header)

    }

    handleRocketfromSocket(){

        crashSocket.onGraphTimer(()=>{
            console.log("graph timer activated inside the gameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            this.rocket.x +=10;
            this.rocket.y-= 10;
            this.rocket.angle-=1;
        })

        crashSocket.onRoundStopped(()=>{
            alert("bhai rocket angle :" +this.rocket.angle);

            this.rocket.angle = 0;
            
        })



    }

}


