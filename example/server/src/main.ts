import { createServer } from "http";
import { Server } from "socket.io";
import { ConsoleManager } from "./ConsoleManager";
import { CoreAgentsServer } from "../../../dist";
import { Task_CreateFile_RequestResponse, Task_CreateFolder_RequestResponse } from "./Tasks";

export const httpServer = createServer();
export const io = new Server(httpServer);

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const consoleManager = new ConsoleManager(<any>io)
export const coreAgentsServer = new CoreAgentsServer(<any>io);
coreAgentsServer.addTask(new Task_CreateFile_RequestResponse("Make-File"));
coreAgentsServer.addTask(new Task_CreateFolder_RequestResponse("Make-Folder"));


io.on("connection", (socket) => {
    console.log("Connection new Socket", socket.id)

    socket.on("disconnect", (args) => {
        console.log('disconnect', args)
        coreAgentsServer.deleteSocket(socket.id)
        consoleManager.deleteSocket(socket.id)
    })

    coreAgentsServer.addNewSocket(socket)
    consoleManager.addSocket(socket)
});

httpServer.listen(3000);

const start = async () => {
    await delay(3000);
    consoleManager.init().then(() => {
        console.log('End')
    })
};

start().then(r => {
})