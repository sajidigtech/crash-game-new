import { Application, Container ,Texture, Assets} from "pixi.js";

export class Game extends Container{



    app!: Application

    constructor(app:Application){
        super();
        this.app = app

    }

}


