const firstName = process.argv[2];
const lastName = process.argv[3];
const liatcpu = process.memoryUsage();

console.log(`Hello ${firstName} ${lastName}`);
console.log(liatcpu)