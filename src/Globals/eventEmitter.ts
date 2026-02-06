type EventCallback = (...args : any[]) =>void;

class EventEmitter {

    private events: { [key: string]: EventCallback[] } = {};

    on(event:string,  callback : EventCallback){
        console.log("emitter on method called ");

        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    off(event:string, callback : EventCallback){

        console.log("emitter  off method called");
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter((cb) => cb !== callback);

    }

    emit(event:string, ...args:any[]){
        console.log("emitter method called");

        if (!this.events[event]){
            this.events[event] = [];
        };

        this.events[event].forEach((callback) => callback(...args));
        
    }

    showEventDetails(){
        console.log("events ye rha bhai on ke baad ",this.events)
    }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;

// understood , requires more practice 