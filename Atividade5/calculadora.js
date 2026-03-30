const valorConta =100;
const percGorjeta =15;

const gorjeta = valorConta * (percGorjeta / 100);
const valorTotal = valorConta + gorjeta;

console.log("Valor da conta: R$", valorConta);
console.log("Gorjeta: R$", gorjeta);
console.log("Valor total: R$", valorTotal);