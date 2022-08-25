console.log(process.argv)

const dbl=(num)=>num*2

console.log(dbl(process.argv[2]))

// console.log(global)

 const [, , n,m]=process.argv;
 console.log((+n+ +m))