import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const operator = await rl.question(`operators \n
[+] Adition\n
[-] substraction\n
[*] multiplication\n
[/] division\n 
Choose a operator: `);

const num1 = await rl.question("enter first number: ");
const num2 = await rl.question("enter second number: ");

let results = sum(parseInt(num1), parseInt(num2));

console.log(`the sum ${num1} + ${num2} is equals to ${results}`);

rl.close();

function sum(a, b) {
  return a + b;
}
