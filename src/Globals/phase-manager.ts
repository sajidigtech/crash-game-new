import eventEmitter from "./eventEmitter"
import crashSocket from "../web-socket/CrashSocket";
// event emitter ko import 



// 1 Phase type
export type GamePhase = "WAITING" | "RUNNING" | "ENDED";


// 2 Current phase variable
let phase: GamePhase = "WAITING"; // default


// 3️Function to update phase and notify all subscribers
function setPhase(newPhase: GamePhase) {
    if (phase === newPhase) return; // avoid duplicate emit
    phase = newPhase;
    eventEmitter.emit("phaseChange", phase); // notify all listeners
}


// 4 Public getter for current phase
export function getPhase() {
    return phase;
}

// 5 Subscribe to phase changes
export function onPhaseChange(callback: (p: GamePhase) => void) {
    eventEmitter.on("phaseChange", callback);
}


// 7 Connect CrashSocket events to phase updates
crashSocket.onGraphTimer(() => setPhase("RUNNING"));
crashSocket.onWaitingTimer(() => setPhase("WAITING"));
crashSocket.onRoundStopped(() => setPhase("ENDED"));