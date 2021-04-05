const os = require('os');

const machine = {
    plataform: os.type(),
    totalmem: Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' MB',
    dirname: os.homedir(),
    freemem: Math.round(os.freemem() / 1024 / 1024 / 1024) + ' MB',
    time: Math.round((os.uptime() / 100) % 60) + ' seg',
    execDuration: Math.round((Date.now() / 100) % 60)
}

console.log(machine);