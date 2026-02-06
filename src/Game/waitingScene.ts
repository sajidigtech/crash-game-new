import crashSocket from "../web-socket/CrashSocket";
import { Application, Container } from "pixi.js";



class WaitingScene extends Container {
    app !: Application;
    constructor(app: Application){
        super();
        this.app = app;
    }

}