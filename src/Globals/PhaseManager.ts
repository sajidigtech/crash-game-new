import crashScoket from "../web-socket/CrashSocket";
export type GamePhase = "WAITING" | "RUNNING" | "ENDED";


let phase: GamePhase | null = "WAITING";


let listener: null | ((p: GamePhase) => void) = null


function setPhase(p: GamePhase) {

    phase = p;
    if (listener) listener(p);

}

crashScoket.onGraphTimer(() => {
    setPhase("RUNNING")
})

crashScoket.onWaitingTimer(() => {
    setPhase("WAITING")
})

crashScoket.onRoundStopped(() => {
    setPhase("ENDED")
})

export function getPhase() {
    return phase;
}

export function onPhaseChange(fn: (p: GamePhase) => void) {
    listener = fn;
}