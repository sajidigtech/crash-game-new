import { io, Socket } from "socket.io-client";
import { CRASH_NAMESPACE } from "./nameSpace";

const BASEURL = import.meta.env.VITE_SOCKET_URL || "ws://cron-dev.grailbet.com"
const SocketPath = import.meta.env.VITE_SOCKET_PATH


class CrashSocket { 

    private socket !: Socket;
    connect(baseUrl: string) {
        this.socket = io(baseUrl + CRASH_NAMESPACE, {
            transports: ["websocket"],
            path: SocketPath || "/api/socket"
        });

        this.socket.on("connect", () => {
            console.log("socket connectedd!", this.socket.id)
        })

        this.socket.on("disconnect", () => {
            console.log(" Disconnected");
        });

    }


    // -------- EMITS --------
    placeBet(amount: number, autoCashout?: number) {
        this.socket.emit("place_bet", { amount, autoCashout });
    }

    cashOut() {
        this.socket.emit("cash_out");
    }


    // ---------------EVENTS------------------

    onRoundStarted(cb: (data: any) => void) {
        this.socket.on("/crash-game/roundStarted", cb);
    }

    onRoundStopped(cb: (data: any) => void) {
        this.socket.on("/crash-game/roundStopped", cb);
    }

    onRoundBettingOnHold(cb: (data: any) => void) {
        this.socket.on("/crash-game/roundBettingOnHold", cb);
    }

    onWaitingTimer(cb: (data: any) => void) {
        this.socket.on("/crash-game/waitingTimer", cb);
    }

    onGraphTimer(cb: (data: any) => void) {
        this.socket.on("/crash-game/graphTimer", cb);
    }

    onPlacedBets(cb: (data: any) => void) {
        this.socket.on("/crash-game/placedBets", cb);
    }

}

const crashSocket = new CrashSocket();
crashSocket.connect(BASEURL);

export default crashSocket;
// har jagah yehi use hoga, crashSocket. jo bhi method rhega wo load hoga esa 