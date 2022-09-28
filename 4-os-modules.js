const os = require('os');

const user = os.userInfo();
console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.type(),
    release : os.release(),
}


console.log(currentOs);
