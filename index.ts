// index.ts 
const aStr = prompt("Masukkan panjang sisi A: ");
const bStr = prompt("Masukkan panjang sisi B: ");

const a = parseFloat(aStr || "0");
const b = parseFloat(bStr || "0");

if (isNaN(a) || isNaN(b)) {
  console.log("Input harus berupa angka!");
  process.exit(1);
}

const c = Math.sqrt(a**2 + b**2);

console.log(`--- Kalkulator Pythagoras ---`);
console.log(`Sisi miringnya adalah: ${c.toFixed(2)}`);