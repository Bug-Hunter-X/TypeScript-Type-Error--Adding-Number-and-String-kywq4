function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') a = parseFloat(a);
  if (typeof b === 'string') b = parseFloat(b);
  return a + b;
}

let result1 = addSafe(1, '2'); //Correct
let result2 = addSafe(1, 2); //Correct
let result3 = addSafe('1', '2'); //Correct