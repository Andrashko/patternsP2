import {writeFileSync, readFileSync} from "fs";

let logSystemInstance = null;

/*
    LogSystem class

    Allows simple logging to file and later dumping to console

    Warning: uses synchronous I/O, do not use in production!
*/
class LogSystem{
    constructor() {
        if (logSystemInstance) {
            return logSystemInstance;
        }

        this.fileName = "log.txt";

        logSystemInstance = this;
    }

    Log(message) {
        writeFileSync(this.fileName, `${new Date(Date.now())} : ${message}\n`, {flag:"a"});
    }

    ShowLog() {
        const log = readFileSync(this.fileName, "utf-8");
        console.log(log);
    }
}

export default LogSystem;