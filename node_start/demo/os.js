// OS

const os = require('os');
console.log('Operation system platform ' + os.platform);

console.log('Arhitecture CPU ' + os.arch());

console.log('CPU info ' + JSON.stringify(os.cpus(), null, 4));

console.log("Free RAM memory " + os.freemem);

console.log(" Total RAM memory " + os.totalmem);

console.log("Home directory " + os.homedir);

console.log("PC load time " + os.uptime);

// console.log("Network interfaces " + os.networkInterfaces);
